import { useEffect, useRef } from "react";

interface TrailDot {
  x: number;
  y: number;
  born: number;
}

const TRAIL_LIFE = 500;

function drawStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  outerR: number,
  innerR: number,
  angle: number
) {
  const points = 5;
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2 + angle;
    const px = x + Math.cos(a) * r;
    const py = y + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

export default function DoodleCursor() {
  const spotlightRef = useRef<HTMLCanvasElement>(null);
  const starRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const spotCanvas = spotlightRef.current!;
    const starCanvas = starRef.current!;
    const spotCtx = spotCanvas.getContext("2d")!;
    const starCtx = starCanvas.getContext("2d")!;

    let mx = -300, my = -300;
    let cx = -300, cy = -300;
    let prevX = -300, prevY = -300;
    let vx = 0, vy = 0;
    let spinAngle = 0;
    const trail: TrailDot[] = [];
    let animId: number;
    let started = false;

    function resize() {
      spotCanvas.width = starCanvas.width = window.innerWidth;
      spotCanvas.height = starCanvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (!started) {
        cx = mx; cy = my;
        started = true;
      }
    }
    window.addEventListener("mousemove", onMove);
    document.body.style.cursor = "none";

    function animate(now: number) {
      // --- Lerp ---
      prevX = cx; prevY = cy;
      cx += (mx - cx) * 0.11;
      cy += (my - cy) * 0.11;
      vx = cx - prevX;
      vy = cy - prevY;
      const speed = Math.sqrt(vx * vx + vy * vy);

      // --- Spin ---
      spinAngle += 0.01 + speed * 0.018;

      // =====================
      // SPOTLIGHT CANVAS
      // =====================
      spotCtx.clearRect(0, 0, spotCanvas.width, spotCanvas.height);

      if (started) {
        const innerR = speed > 0.6 ? 230 : 130;

        // Primary spotlight
        const grad = spotCtx.createRadialGradient(cx, cy, 0, cx, cy, innerR);
        grad.addColorStop(0, "rgba(196,181,253, 0.22)");
        grad.addColorStop(1, "rgba(196,181,253, 0)");
        spotCtx.fillStyle = grad;
        spotCtx.beginPath();
        spotCtx.arc(cx, cy, innerR, 0, Math.PI * 2);
        spotCtx.fill();

        // Second outer ring when fast
        if (speed > 0.6) {
          const outerR = 380;
          const grad2 = spotCtx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
          grad2.addColorStop(0, "rgba(167,139,250, 0.07)");
          grad2.addColorStop(1, "rgba(167,139,250, 0)");
          spotCtx.fillStyle = grad2;
          spotCtx.beginPath();
          spotCtx.arc(cx, cy, outerR, 0, Math.PI * 2);
          spotCtx.fill();
        }
      }

      // =====================
      // STAR CANVAS
      // =====================
      starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);

      if (!started) {
        animId = requestAnimationFrame(animate);
        return;
      }

      // Trail dots
      trail.push({ x: cx, y: cy, born: now });
      if (trail.length > 60) trail.shift();
      const cutoff = now - TRAIL_LIFE;
      for (let i = trail.length - 1; i >= 0; i--) {
        if (trail[i].born < cutoff) { trail.splice(0, i + 1); break; }
      }

      trail.forEach((dot) => {
        const age = now - dot.born;
        const t = 1 - age / TRAIL_LIFE;
        const r = t * 3.5;
        starCtx.save();
        starCtx.globalAlpha = t * 0.55;
        starCtx.fillStyle = "#a78bfa";
        starCtx.shadowBlur = 6 * t;
        starCtx.shadowColor = "#7c3aed";
        starCtx.beginPath();
        starCtx.arc(dot.x, dot.y, r, 0, Math.PI * 2);
        starCtx.fill();
        starCtx.restore();
      });

      // Sparkle lines when fast
      if (speed > 0.6) {
        const points = 5;
        const sparkLen = 10 + speed * 4;
        const alpha = Math.min((speed - 0.6) / 2.5, 1);
        for (let i = 0; i < points; i++) {
          const a = (i / points) * Math.PI * 2 - Math.PI / 2 + spinAngle;
          const tipX = cx + Math.cos(a) * 14;
          const tipY = cy + Math.sin(a) * 14;
          const endX = cx + Math.cos(a) * (14 + sparkLen);
          const endY = cy + Math.sin(a) * (14 + sparkLen);
          starCtx.save();
          starCtx.globalAlpha = alpha * 0.75;
          starCtx.strokeStyle = "#ede9fe";
          starCtx.lineWidth = 1;
          starCtx.shadowBlur = 8;
          starCtx.shadowColor = "#a78bfa";
          starCtx.lineCap = "round";
          starCtx.beginPath();
          starCtx.moveTo(tipX, tipY);
          starCtx.lineTo(endX, endY);
          starCtx.stroke();
          starCtx.restore();
        }
      }

      // Star fill
      starCtx.save();
      drawStar(starCtx, cx, cy, 14, 6, spinAngle);
      starCtx.fillStyle = "rgba(167,139,250, 0.18)";
      starCtx.fill();

      // Star stroke
      starCtx.shadowBlur = 6 + Math.min(speed * 5, 20);
      starCtx.shadowColor = "#7c3aed";
      starCtx.strokeStyle = "#ede9fe";
      starCtx.lineWidth = 1.3;
      starCtx.lineCap = "round";
      starCtx.lineJoin = "round";
      drawStar(starCtx, cx, cy, 14, 6, spinAngle);
      starCtx.stroke();
      starCtx.restore();

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.body.style.cursor = "";
    };
  }, []);

  const base: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
  };

  return (
    <>
      <canvas ref={spotlightRef} style={{ ...base, zIndex: 1 }} />
      <canvas ref={starRef} style={{ ...base, zIndex: 3 }} />
    </>
  );
}
