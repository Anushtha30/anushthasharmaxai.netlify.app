import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profileImg from "@assets/anushtha_profess_red__1779696351537.jpeg";
import imgSentinelX from "@assets/SentinelX_Bot_Detection_1779871223836.png";
import imgEmotionDetection from "@assets/eal-Time_Emotion_Detection_1779871233279.png";
import imgNeonAirDraw from "@assets/Neon_Air_Draw_1779871239814.png";
import DoodleCursor from "@/components/DoodleCursor";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <DoodleCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <WorksSection />
        <ResumeSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['Home', 'Services', 'Works', 'Resume', 'Skills', 'Testimonials', 'Contact'];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0">
            AS
          </div>
          <span className="hidden md:inline text-sm font-medium text-white/70">anushthasharma30@gmail.com</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button onClick={() => scrollTo('contact')} className="rounded-full px-5 text-sm shadow-[0_0_15px_rgba(166,115,248,0.5)] hover:shadow-[0_0_25px_rgba(166,115,248,0.8)] transition-all">
            Hire Me!
          </Button>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'}`}>
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1 bg-background/95">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium text-white hover:text-primary hover:bg-primary/10 transition-colors text-left px-4 py-3 rounded-lg"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  const stats = [
    { label: "GitHub Repositories", value: "100+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Programming Languages Known", value: "10+" },
    { label: "Years of Coding", value: "3+" }
  ];

  return (
    <section id="home" className="pt-20 md:pt-32 pb-16 md:pb-20 container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-transparent text-white text-sm font-medium"
          >
            I am Anushtha Sharma
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold leading-tight text-white"
          >
            Full Stack Developer |{" "}
            <span style={{ color: "#a855f7" }}>AI/ML Engineer</span>{" "}+<br />
            Building scalable apps &{" "}
            <span style={{ color: "#a855f7" }}>intelligent systems</span>{" "}on AWS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#e2e8f0] text-lg max-w-2xl"
          >
            I design and build full-stack applications, deploy machine learning models, and create scalable cloud-based systems using AWS. Passionate about solving real-world problems with intelligent and efficient solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <a href="/Anushtha-Sharma-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full shadow-[0_0_15px_rgba(166,115,248,0.5)]">
                View CV
              </Button>
            </a>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://www.linkedin.com/in/anushtha-sharma31/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaLinkedin className="w-5 h-5" /></a>
              <a href="https://github.com/Anushtha30" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaGithub className="w-5 h-5" /></a>
              <a href="https://leetcode.com/u/anushtha30/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaCode className="w-5 h-5" /></a>
              <a href="mailto:anushthasharma30@gmail.com" className="hover:text-primary transition-colors"><MdEmail className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px]">
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-4 rounded-full border-2 border-primary/30 animate-pulse" style={{ animationDuration: '2s' }}></div>
            <img 
              src={profileImg}
              alt="Anushtha Sharma" 
              className="w-full h-full object-cover object-top rounded-full shadow-[0_0_50px_rgba(166,115,248,0.4)] relative z-10"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center space-y-2"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: "Full Stack Development", desc: "Building responsive, robust web applications using React, Node.js, and modern frameworks." },
    { title: "AI/ML Engineering", desc: "Designing and deploying intelligent models using TensorFlow, Scikit-learn, and Python." },
    { title: "Cloud Architecture (AWS)", desc: "Creating scalable, secure cloud infrastructures tailored for high performance." },
    { title: "UI/UX Design", desc: "Crafting intuitive and immersive user experiences focused on usability and aesthetics." }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">My Quality Services</h2>
          <p className="text-muted-foreground">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(166,115,248,0.15)] group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 border-2 border-current rounded-sm" />
              </div>
              <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksSection() {
  const projects = [
    {
      title: "SignSync — AI Sign Language Recognition",
      tags: "React • TypeScript • MediaPipe • Express • NLP • Tailwind CSS • PostgreSQL",
      desc: "Real-time sign language translator converting hand gestures into text and speech. Live hand tracking via MediaPipe, custom Bigram + Trigram NLP engine for smart autocomplete, and Web Speech API for voice output. Supports English & Hindi with top-5 next-word predictions and confidence scores.",
      color: "from-violet-900/60 to-indigo-900/60",
      img: null,
      github: "https://github.com/Anushtha30/Sign-Language-Recognition-System-with-an-AI-powered"
    },
    {
      title: "IT Support Ticket System",
      tags: "React • Node.js • SQL • MongoDB",
      desc: "Full-stack ticketing platform handling 50+ users with real-time tracking, REST APIs, and an admin dashboard with analytics & workflow management.",
      color: "from-purple-900/60 to-blue-900/60",
      img: null,
      github: "https://github.com/Anushtha30/-IT-Support-Ticket-System-Full-Stack-Project"
    },
    {
      title: "SentinelX Bot Detection",
      tags: "Python • NLP • Behavioral Biometrics",
      desc: "Tracks clicks, keystrokes, and interaction patterns for real-time human/bot classification. Includes NLP-based spam detection.",
      color: "from-red-900/60 to-purple-900/60",
      img: imgSentinelX,
      github: "https://github.com/Anushtha30/Bot-Detector-UI-powered-by-AI"
    },
    {
      title: "AI PDF Reader & Converter",
      tags: "Python • AI • NLP",
      desc: "AI-powered document processing with text extraction, keyword detection & classification. Optimized pipelines delivering 30% faster processing.",
      color: "from-green-900/60 to-teal-900/60",
      img: null,
      github: "https://github.com/Anushtha30/pdf-viewer-annotator"
    },
    {
      title: "Neon Air Draw",
      tags: "MediaPipe • OpenCV • React • Canvas API",
      desc: "Gesture-based spatial drawing interface with real-time tracking at ~30 FPS. Touchless human-computer interaction using hand landmark detection.",
      color: "from-pink-900/60 to-purple-900/60",
      img: imgNeonAirDraw,
      github: "https://github.com/Anushtha30/NEON-AIR-DRAW-SPATIAL-INTERFACE-AI-powered"
    },
    {
      title: "Real-Time Emotion Detection",
      tags: "Python • OpenCV • ML",
      desc: "Live webcam-based emotion prediction trained on 1000+ images achieving 80–85% accuracy using CNNs and computer vision techniques.",
      color: "from-yellow-900/60 to-orange-900/60",
      img: imgEmotionDetection,
      github: "https://github.com/Anushtha30/Face-emotions-detection-powered-by-Python-and-AI"
    }
  ];

  return (
    <section id="works" className="py-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">My Recent Works</h2>
        <p className="text-muted-foreground">Real-world projects spanning full-stack development, AI/ML, and intelligent system design.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(166,115,248,0.3)] cursor-pointer block"
          >
            <div className={`aspect-video bg-gradient-to-br ${p.color} relative overflow-hidden`}>
              {p.img ? (
                <>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-sm bg-primary/80 px-4 py-2 rounded-full">View on GitHub →</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(166,115,248,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(166,115,248,0.2) 0%, transparent 50%)' }} />
                  <div className="flex items-center justify-center h-full flex-col gap-2">
                    <h3 className="text-xl font-bold text-white text-center px-4 relative z-10 drop-shadow-lg">{p.title}</h3>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs bg-primary/80 px-3 py-1 rounded-full z-10">View on GitHub →</span>
                  </div>
                </>
              )}
            </div>
            <div className="p-6">
              <div className="text-primary text-sm font-medium mb-3">{p.tags}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function ResumeSection() {
  const experiences = [
    {
      year: "June 2025 – August 2025",
      role: "Python Developer — AI & Cloud (Internship)",
      company: "Dilwado.com — Remote",
      bullets: [
        "Engineered an AI-powered PDF processing pipeline using Python and ML — covering text extraction, keyword detection, and content classification — reducing document processing time by 20–30%.",
        "Optimized end-to-end ETL data pipeline for large-scale PDF ingestion with real-time conversion and zero data-loss handling.",
        "Architected a full-stack IT ticketing platform using React.js, Node.js, PostgreSQL, and MongoDB — supporting 50+ concurrent users with JWT-based authentication.",
        "Built an admin analytics dashboard with real-time workflow monitoring and ticket-status tracking.",
      ]
    },
    {
      year: "May 2024 – June 2024",
      role: "Python Developer — AI & Machine Learning (Internship)",
      company: "Arambh Softech — Remote",
      bullets: [
        "Integrated a Large Language Model (LLM) with a CNN-based emotion-detection model for real-time facial emotion prediction via webcam with under 2-second inference latency.",
        "Built a complete ML pipeline: image capture → grayscale preprocessing → normalization → CNN inference → output display.",
        "Trained classification models on labelled image datasets, achieving 80–85% emotion recognition accuracy.",
      ]
    },
    {
      year: "June 2024 – August 2024",
      role: "Software Developer Intern",
      company: "Usha Martin — Ranchi, Jharkhand",
      bullets: [
        "Supported enterprise software delivery using SAP tools — contributing to development, customisation, and system support for business-critical workflows.",
        "Collaborated with cross-functional teams to gather requirements and deliver technical presentations to senior stakeholders.",
      ]
    },
  ];

  const education = [
    {
      year: "2022 – May 2026 (Expected)",
      role: "B.Tech — Computer Science & Engineering",
      company: "Sarala Birla University (SBU), Ranchi, Jharkhand",
      desc: "CGPA: 7.2 · Specialising in AI/ML. Coursework: Python, Data Structures, Deep Learning, Computer Vision, Cloud Computing, NLP, Reinforcement Learning, CNNs, RNNs."
    }
  ];

  const certifications = [
    "Dilwado.com Internship Certificate — 2025",
    "Cisco CNN Certification — Cisco Networking Academy, 2024",
    "Web Developer Internship Certificate — Dilwado.com, 2025",
    "Big Data Analyst — Internshala / NSDC, 2024",
    "AWS Cloud Computing — Amazon Web Services (AWS), 2024",
    "IBM Data Science: Tools of Data Science — IBM / Coursera, 2024",
  ];

  const codingProfiles = [
    { label: "LeetCode", detail: "150+ DSA problems solved · Rank 243,540 · 100 Days Badge 2025", url: "https://leetcode.com/u/anushtha30/" },
    { label: "GitHub", detail: "20+ repositories including AI/ML projects · 183 Total Contributions", url: "https://github.com/Anushtha30" },
  ];

  return (
    <section id="resume" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">My Resume</h2>
          <a href="/Anushtha-Sharma-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 shadow-[0_0_15px_rgba(166,115,248,0.5)] hover:shadow-[0_0_25px_rgba(166,115,248,0.8)] transition-all">
              View Resume (PDF)
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">💼</span>
              Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {experiences.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-2 w-10 h-10 bg-background border border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_rgba(166,115,248,0.5)]">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border">
                    <div className="text-primary text-sm font-bold mb-1">{exp.year}</div>
                    <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                    <div className="text-muted-foreground text-sm mb-3">{exp.company}</div>
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground/80 flex gap-2">
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">🎓</span>
                Education
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-2 w-10 h-10 bg-background border border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_rgba(166,115,248,0.5)]">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border">
                      <div className="text-primary text-sm font-bold mb-1">{edu.year}</div>
                      <h4 className="text-xl font-bold mb-1">{edu.role}</h4>
                      <div className="text-muted-foreground text-sm mb-3">{edu.company}</div>
                      <p className="text-sm text-muted-foreground/80">{edu.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">💻</span>
                Coding Profiles
              </h3>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-4 mb-8">
                {codingProfiles.map((p, i) => (
                  <motion.a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 group"
                  >
                    <span className="text-primary shrink-0 mt-0.5">✦</span>
                    <div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{p.label}</div>
                      <div className="text-xs text-muted-foreground/80">{p.detail}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">🏆</span>
                Certifications
              </h3>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-2 text-sm text-muted-foreground/80"
                  >
                    <span className="text-primary shrink-0">✦</span>
                    <span>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "Python / Java / JavaScript", val: 90 },
    { name: "React / Node.js", val: 85 },
    { name: "AI & Machine Learning (OpenCV, Scikit-Learn)", val: 82 },
    { name: "AWS (EC2, S3, Lambda, EKS)", val: 78 },
    { name: "MongoDB / PostgreSQL", val: 80 },
    { name: "NLP & Computer Vision", val: 75 },
  ];

  return (
    <section id="skills" className="py-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">My Skills</h2>
        <p className="text-muted-foreground">Technical proficiency across the full stack and cloud ecosystems.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {skills.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-primary font-bold">{skill.val}%</span>
            </div>
            <div className="h-3 w-full bg-card rounded-full overflow-hidden border border-border">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.val}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full bg-primary relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { quote: "Anushtha is an exceptional developer. Her ability to blend complex AI models into seamless web applications is truly impressive.", name: "Sarah Jenkins", role: "Product Manager" },
    { quote: "Working with Anushtha was a breeze. She architected our AWS backend from scratch and reduced our latency by 50%.", name: "David Chen", role: "CTO, StartupX" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border relative"
            >
              <div className="text-4xl text-primary/20 absolute top-4 left-4">"</div>
              <p className="text-muted-foreground italic mb-6 relative z-10 pt-4">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-primary">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-muted-foreground">Ready to start your next project? Drop me a message and let's build something amazing together.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-2xl border border-border flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <MdEmail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">anushthasharma30@gmail.com</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-2xl border border-border flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <span className="font-bold">📍</span>
            </div>
            <div>
              <h3 className="font-bold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Remote / Available Worldwide</p>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-2xl border border-border space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
            <input type="text" placeholder="Last Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
          <textarea rows={4} placeholder="Your Message" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
          <Button type="submit" className="w-full rounded-lg shadow-[0_0_15px_rgba(166,115,248,0.5)]">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anushtha Sharma. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://www.linkedin.com/in/anushtha-sharma31/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaLinkedin className="w-5 h-5" /></a>
          <a href="https://github.com/Anushtha30" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaGithub className="w-5 h-5" /></a>
          <a href="https://leetcode.com/u/anushtha30/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaCode className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
