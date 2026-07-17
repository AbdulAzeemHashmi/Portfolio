"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Types & Interfaces
interface FluidParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  hue: number;
  frequency: number;
  decay: number;
}

// Static Configurations & Dataset Moves Outside Component to Prevent Re-allocation
const NAV_LINKS = ["About", "Services", "Skills", "Projects", "Contact"];

const SERVICES = [
  {
    title: "AI & Data Science",
    icon: "🧠",
    desc: "Building predictive models, exploratory data analysis (EDA), and intelligent systems using Python, Scikit-Learn, and custom AI logic.",
    highlight: "Expert in Pandas, NumPy, and Data Pipelines.",
  },
  {
    title: "Backend & Database Architecture",
    icon: "⚙️",
    desc: "Developing robust server-side logic and highly optimized relational/NoSQL databases to power complex web applications seamlessly.",
    highlight: "Proficient in SQL, MongoDB, Node.js, and ERD Modeling.",
  },
  {
    title: "Low-Level & Logic Engineering",
    icon: "🚀",
    desc: "Crafting performant, logic-heavy applications, algorithms, and game loops with advanced data structures and memory management.",
    highlight: "Comprehensive C++ and Object-Oriented Programming (OOP).",
  }
];

const PROJECTS = [
  {
    title: "Autonomous Digital Employee",
    category: "AI",
    description: "An AI-powered full-stack workstation enabling users to delegate complex tasks to an autonomous digital agent with real-time database logging and Google Gemini primary integration.",
    link: "https://github.com/AbdulAzeemHashmi/autonomous-digital-employee",
    liveLink: "https://autonomous-digital-employee-zeta.vercel.app/",
    tags: ["Next.js", "FastAPI", "LangChain", "Gemini API", "Supabase"]
  },
  {
    title: "AI Image Verifier",
    category: "AI",
    description: "An intelligent image verification system leveraging vision models to analyze, authenticate, and process image content with precision.",
    link: "https://github.com/AbdulAzeemHashmi/AI-Image-Verifier",
    liveLink: "https://ai-image-verifier.vercel.app/",
    tags: ["Next.js", "AI", "Hugging Face", "Supabase", "TypeScript"]
  },
  {
    title: "AI Chatbot",
    category: "AI",
    description: "A production-ready full-stack AI Chatbot application featuring a fast Python FastAPI backend and a responsive Next.js frontend, powered by the Google Gemini API.",
    link: "https://github.com/AbdulAzeemHashmi/AI-Chatbot",
    liveLink: "https://ai-chatbot-aah18751.vercel.app/",
    tags: ["Next.js", "FastAPI", "Python", "Gemini API", "TypeScript"]
  },
  {
    title: "AI Resume Analyzer",
    category: "AI",
    description: "An intelligent web application that detects resume weaknesses, automatically enhances formatting and content using OpenAI, and provides download options in PDF/DOCX format.",
    link: "https://github.com/AbdulAzeemHashmi/AI-Resume-Analyzer",
    liveLink: "https://ai-resume-analyzer-aah18751.vercel.app/",
    tags: ["TypeScript", "Tailwind CSS", "Python", "Flask", "OpenAI API"]
  },
  {
    title: "Agentic UAV Mission Planner",
    category: "AI",
    description: "An end-to-end mission planning simulator that processes natural language requests, generates optimized waypoint routes, and enforces multi-rule airspace compliance.",
    link: "https://github.com/AbdulAzeemHashmi/agentic-uav-mission-planner",
    tags: ["Python", "Streamlit", "Google Gemini", "Folium", "SQLite"]
  },
  {
    title: "Artificial Intelligence Open Ended Lab",
    category: "AI",
    description: "Open-ended laboratory project focused on building an AI video processing pipeline using object detection, image captioning, and scene impact scoring techniques.",
    link: "https://github.com/AbdulAzeemHashmi/Artificial-Intelligence-Open-Ended-Lab",
    tags: ["Python", "Numpy", "Scikit-Learn", "Machine Learning", "Matplotlib", "Data Visualization", "Computer Vision"]
  },
  {
    title: "RC Car",
    category: "AI",
    description: "An intelligent remote-controlled vehicle powered by vision or AI logic models, combining software with automated hardware engineering.",
    link: "https://github.com/AbdulAzeemHashmi/RC-CAR",
    tags: ["ESP32", "C++", "Python", "AI", "Computer Vision"]
  },
  {
    title: "Probability & Statistics Analyzer",
    category: "AI",
    description: "Data analysis platform leveraging mathematical and statistical models for predictive analytics and computational insights.",
    link: "https://github.com/AbdulAzeemHashmi/Probability-and-Statistics-Project",
    tags: ["Python", "Pandas", "Matplotlib", "Scikit-Learn", "Statistics"]
  },
  {
    title: "Database Systems Open Ended Lab",
    category: "AI",
    description: "Open-ended laboratory project exploring vector databases, covering embeddings, similarity search, and indexing for intelligent data retrieval.",
    link: "https://github.com/AbdulAzeemHashmi/Database-Systems-Open-Ended-/Lab",
    tags: ["Python", "Pinecone", "Numpy", "Matplotlib", "KNN"]
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description: "The source code of this modern, lightning-fast portfolio built with Next.js and Tailwind CSS, fully deployed to Vercel.",
    link: "https://github.com/AbdulAzeemHashmi/Portfolio",
    liveLink: "https://abdulazeemhashmi.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Assignment & Project Services",
    category: "Web Development",
    description: "A fully responsive static web page offering assignment and project services with an instant PKR price calculator and direct contact options.",
    link: "https://github.com/AbdulAzeemHashmi/assignment-2-static-webpage",
    liveLink: "https://assignment-2-static-webpage-silk.vercel.app/",
    tags: ["HTML/CSS", "JavaScript", "Vercel", "Responsive Design"]
  },
  {
    title: "Support Ticket Management System",
    category: "Web Development",
    description: "A full-stack support ticket management system featuring CRUD dashboards, live statistics, form validation, and persistent SQLite storage.",
    link: "https://github.com/AbdulAzeemHashmi/support-ticket-management-system",
    tags: ["Node.js", "Express", "SQLite", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Aether Student Portal",
    category: "Web Development",
    description: "Full-stack educational management portal featuring secure user roles, interactive dashboards, and scalable architectures.",
    link: "https://github.com/AbdulAzeemHashmi/Aether-Student-Portal",
    tags: ["HTML/CSS", "JavaScript", "Node.js", "Backend Design"]
  },
  {
    title: "Database Systems Lab Project",
    category: "Web Development",
    description: "Dynamic web application seamlessly integrating front-end user experience with fully optimized relational databases.",
    link: "https://github.com/AbdulAzeemHashmi/Database-Systems-Lab-Project",
    tags: ["Web App", "MySQL", "Relational Mapping"]
  },
  {
    title: "Rush Hour Game",
    category: "Game Development",
    description: "A logic-heavy strategic puzzle game built with algorithmic board state validations and optimized state evaluation.",
    link: "https://github.com/AbdulAzeemHashmi/Rush-Hour-Game",
    tags: ["C++", "Data Structures", "Game Loop"]
  },
  {
    title: "Word Shooter Game",
    category: "Game Development",
    description: "Fast-paced interactive application with dynamic collision handling, scoring algorithms, and clean asset execution.",
    link: "https://github.com/AbdulAzeemHashmi/Word-Shooter-Game",
    tags: ["C++", "OOP", "Arcade Architecture"]
  },
  {
    title: "Snake Game",
    category: "Game Development",
    description: "Pure C++ logic implementation of the classical snake game incorporating dynamic arrays and precise console rendering.",
    link: "https://github.com/AbdulAzeemHashmi/Snake-Game",
    tags: ["C++", "Data Structures", "Memory Management"]
  },
  {
    title: "911 Emergency Data Analysis",
    category: "Database",
    description: "Exploratory analysis on massive datasets of 911 emergency calls utilizing document schemas inside MongoDB.",
    link: "https://github.com/AbdulAzeemHashmi/911-Emergency-Analysis-Mongo-DB",
    tags: ["MongoDB", "NoSQL", "Data Cleaning", "JSON Schemas"]
  },
  {
    title: "Instagram Lifestyle DB Analysis",
    category: "Database",
    description: "Complex relational model analyzing user actions, trends, and lifecycle data metrics inside modern social frameworks.",
    link: "https://github.com/AbdulAzeemHashmi/Instagram-Lifestyle-DB-Analysis",
    tags: ["MySQL", "Relational Schema", "Complex Queries"]
  },
];

const SKILLS = [
  { category: "Programming Languages", icon: "💻", list: ["Python", "C++", "SQL", "JavaScript"], desc: "Core languages used for building logic, algorithms, and interfaces." },
  { category: "Data & Artificial Intelligence", icon: "🧠", list: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Hugging Face", "EDA", "Machine Learning"], desc: "Libraries and workflows for extracting insights and training predictive models." },
  { category: "Databases & Architecture", icon: "🗄️", list: ["MySQL", "MongoDB", "Supabase", "Relational Database Design", "ERD Modeling", "Query Optimization"], desc: "Designing secure, scalable, and efficient data storage solutions." },
  { category: "Tools & Environments", icon: "🛠️", list: ["Linux (Ubuntu)", "Node.js", "Git / GitHub", "VS Code", "Jupyter / Colab"], desc: "Professional environments and version control for seamless development." }
];

// Floating Background Music Pipeline Engine
function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const initPlayer = () => {
      if (playerRef.current) return;

      playerRef.current = new (window as any).YT.Player("youtube-audio-pipeline", {
        height: "0",
        width: "0",
        videoId: "QXJyMpxd210",
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: "QXJyMpxd210",
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          fs: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.setVolume(100);
            event.target.unMute();
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === (window as any).YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);

      (window as any).onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      setTimeout(initPlayer, 100);
    }

    const attemptAutoplay = () => {
      if (playerRef.current?.playVideo) {
        try {
          playerRef.current.setVolume(100);
          playerRef.current.unMute();
          playerRef.current.playVideo();
          setIsPlaying(true);
        } catch (e) {
          console.log("Autoplay restricted, waiting for user interaction");
        }
      }
    };

    // Try autoplay after a short delay
    const timer1 = setTimeout(attemptAutoplay, 2000);

    // Also try on first user interaction
    const handleInteraction = () => {
      attemptAutoplay();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    return () => {
      clearTimeout(timer1);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!playerRef.current) return;

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.setVolume(100);
        playerRef.current.unMute();
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (e) {
      console.error("Error toggling music:", e);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div id="youtube-audio-pipeline" className="hidden" />
      <button
        onClick={toggleMusic}
        className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-950/80 hover:bg-slate-900 text-cyan-400 border border-slate-800/80 hover:border-cyan-500/50 rounded-full shadow-2xl shadow-cyan-950/40 transition-all duration-300 backdrop-blur-md text-[11px] font-bold tracking-widest uppercase group pointer-events-auto"
        aria-label="Toggle Background Soundtrack Engine"
      >
        <span className="relative flex h-2 w-2 items-center justify-center">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? "bg-cyan-400" : "bg-slate-500"}`}></span>
        </span>

        <span>{isPlaying ? "Ve Kamleya • On" : "Ve Kamleya • Off"}</span>

        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3 w-3 mb-0.5">
            <span className="bg-cyan-400 w-0.5 animate-[pulse_0.8s_infinite_alternate] h-full" />
            <span className="bg-cyan-400 w-0.5 animate-[pulse_0.5s_infinite_alternate] h-2" />
            <span className="bg-cyan-400 w-0.5 animate-[pulse_0.7s_infinite_alternate] h-3" />
          </div>
        ) : (
          <span className="text-xs text-slate-500 opacity-70">🎵</span>
        )}
      </button>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isMobile = width < 768;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      isMobile = width < 768;
    };
    window.addEventListener("resize", handleResize);

    const particles: FluidParticle[] = [];
    let baseHue = 0;
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;

    const spawnFluid = (clientX: number, clientY: number) => {
      if (!isMoving) {
        lastX = clientX;
        lastY = clientY;
        isMoving = true;
        return;
      }

      const vx = clientX - lastX;
      const vy = clientY - lastY;
      const speed = Math.sqrt(vx * vx + vy * vy);

      if (speed > 1) {
        const maxSpawn = isMobile ? 4 : 12;
        const spawnCount = Math.min(speed * 0.4, maxSpawn);
        const currentFrequency = 1.5 + (speed * 0.1) + Math.sin(clientX * 0.01) * 0.5;

        for (let i = 0; i < spawnCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const force = Math.random() * speed * 0.1;

          particles.push({
            x: clientX,
            y: clientY,
            vx: vx * 0.12 + Math.cos(angle) * force,
            vy: vy * 0.12 + Math.sin(angle) * force,
            radius: Math.random() * (isMobile ? 30 : 65) + (isMobile ? 15 : 30),
            alpha: 0.85,
            hue: (baseHue + (i * currentFrequency)) % 360,
            frequency: currentFrequency,
            decay: Math.random() * 0.006 + 0.003,
          });
        }
      }

      lastX = clientX;
      lastY = clientY;
      baseHue = (baseHue + 1.2 + (speed * 0.05)) % 360;
    };

    const handleMouseMove = (e: MouseEvent) => spawnFluid(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        spawnFluid(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchStart = () => { isMoving = false; };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    const animate = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.06)";
      ctx.fillRect(0, 0, width, height);

      // Increment hue slowly on each frame and update CSS custom property
      baseHue = (baseHue + 0.3) % 360;
      document.documentElement.style.setProperty('--animation-hue', baseHue.toFixed(1));

      ctx.globalCompositeOperation = "lighter";
      const time = Date.now() * 0.002;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        const curlX = Math.sin(p.y * 0.004 + time) * 0.25;
        const curlY = Math.cos(p.x * 0.004 + time) * 0.25;

        p.vx += curlX;
        p.vy += curlY;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.radius += 0.85;

        p.hue = (p.hue + p.frequency * 0.4) % 360;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `hsla(${p.hue}, 95%, 55%, ${p.alpha * 0.4})`);
        gradient.addColorStop(0.25, `hsla(${p.hue}, 90%, 50%, ${p.alpha * 0.15})`);
        gradient.addColorStop(0.6, `hsla(${p.hue}, 85%, 45%, ${p.alpha * 0.03})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("SUBMITTING");

    try {
      const response = await fetch("https://formsubmit.co/ajax/abdulazeemhashmi29@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: "New portfolio submission!",
        }),
      });

      if (response.ok) {
        setFormStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("ERROR");
      }
    } catch (error) {
      setFormStatus("ERROR");
    }
  };

  const filteredProjects = activeCategory === "All" ? PROJECTS : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 scroll-smooth relative overflow-x-hidden">

      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none bg-slate-950"
      />

      <BackgroundMusic />

      <div className="relative z-10 pointer-events-auto">
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-900/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <span className="text-cyan-400 font-bold tracking-widest">AAH.</span>

            <ul className="hidden md:flex gap-8 text-sm font-medium">
              {NAV_LINKS.map((link) => {
                const lowerLink = link.toLowerCase();
                const isActive = activeSection === lowerLink;
                return (
                  <li key={link}>
                    <a
                      href={`#${lowerLink}`}
                      className={`transition-colors duration-300 uppercase tracking-wider relative group ${isActive ? "text-cyan-400 font-semibold" : "text-slate-300 hover:text-cyan-400"
                        }`}
                    >
                      {link}
                      <span className={`absolute -bottom-2 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}></span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none p-2 z-50 relative"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
            }`}>
            <ul className="flex flex-col items-center gap-8 text-xl font-bold tracking-widest">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-200 hover:text-cyan-400 active:text-cyan-400 transition-colors uppercase block p-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <header id="about" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center border-b border-slate-900/40">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="mb-6 md:mb-8 relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-cyan-500/20 mx-auto z-10 bg-slate-900">
            <Image
              src="/Gemini_Generated_Image_8bhv2i8bhv2i8bhv.png"
              alt="Abdul Azeem Hashmi Profile Picture"
              fill
              priority
              sizes="(max-width: 768px) 144px, 192px"
              className="object-cover"
            />
          </div>

          <span className="text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider mb-6 uppercase z-10 backdrop-blur-sm">
            FAST NUCES Islamabad • Batch '24
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 z-10 max-w-3xl leading-tight text-white">
            <span className="dynamic-text-contrast">Hi, I'm </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Abdul Azeem Hashmi</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-2xl leading-relaxed mb-8 z-10 px-6 py-4 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-slate-900/40 shadow-xl font-normal hero-desc-shadow">
            A passionate <span className="text-cyan-300 font-semibold">BS Artificial Intelligence</span> student building clean backend architectures, relational data pipelines, performant low-level engines, and interactive web tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center z-10 w-full sm:w-auto px-4 sm:px-0">
            <a href="#projects" className="px-6 py-3 text-center bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-cyan-500/20 text-sm">
              View My Projects
            </a>
            <a href="#contact" className="px-6 py-3 text-center bg-slate-900/80 border border-slate-800 rounded-lg hover:bg-slate-800 transition text-slate-300 font-medium backdrop-blur-sm text-sm">
              Contact Me
            </a>
          </div>
        </header>

        <section id="services" className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 border-b border-slate-900/40">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold dynamic-text-contrast tracking-tight mb-3 flex justify-center items-center gap-3">
              <span className="text-indigo-500">❖</span> Services
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto px-2">Specialized technical solutions tailored for modern digital challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((srv, i) => (
              <div key={i} className="bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-300 group shadow-lg shadow-black/30 flex flex-col justify-between">
                <div>
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6 bg-slate-950/80 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-slate-800 group-hover:border-indigo-500 transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold dynamic-text-contrast mb-3 tracking-wide">{srv.title}</h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>
                <p className="text-[11px] md:text-xs font-semibold text-indigo-300 bg-indigo-950/50 p-3 rounded-lg border border-indigo-900/50">
                  {srv.highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 border-b border-slate-900/40">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl md:text-4xl font-bold dynamic-text-contrast tracking-tight flex items-center justify-center sm:justify-start gap-3">
              <span className="text-cyan-500">⚡</span> Skills
            </h2>
            <p className="text-slate-200 text-sm md:text-base mt-2 font-medium hero-desc-shadow">My core competencies and technology stack.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {SKILLS.map((skill, i) => (
              <div key={i} className="bg-slate-950/80 backdrop-blur-md border border-slate-800/80 p-5 md:p-6 rounded-xl hover:border-cyan-500/50 transition group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl md:text-2xl">{skill.icon}</span>
                  <h3 className="text-base md:text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition">
                    {skill.category}
                  </h3>
                </div>
                <p className="text-slate-300 text-xs md:text-sm mb-4 font-light">{skill.desc}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {skill.list.map((item, idx) => (
                    <span key={idx} className="bg-slate-950/80 border border-slate-800 text-cyan-300 px-2.5 py-1 rounded-md text-[11px] font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 border-b border-slate-900/40">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
            <div className="text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-2xl md:text-4xl font-bold dynamic-text-contrast tracking-tight flex items-center justify-center lg:justify-start gap-3">
                <span className="text-emerald-500">⌘</span> Projects
              </h2>
              <p className="text-slate-200 text-sm md:text-base mt-2 font-medium hero-desc-shadow">Filtered codebase architectures mapping specialized domains.</p>
            </div>

            <div className="flex flex-wrap gap-1.5 bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 p-1.5 rounded-xl justify-center w-full lg:w-auto">
              {["All", "AI", "Web Development", "Game Development", "Database"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-[10px] md:text-xs font-semibold tracking-wide transition uppercase whitespace-nowrap ${activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                    }`}
                >
                  {cat === "Web Development" ? "Web" : cat === "Game Development" ? "Games" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 md:p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-slate-950/95 transition-all duration-300 group relative">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-900/40 px-2 py-0.5 rounded mb-3 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-slate-950/80 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-center block px-4 py-2 bg-slate-950/80 hover:bg-emerald-500 hover:text-slate-950 rounded-lg text-xs font-bold tracking-wide text-slate-300 transition-all border border-slate-800 hover:border-emerald-500 ${"liveLink" in project ? "flex-1" : "w-full"}`}
                    >
                      {"liveLink" in project ? "Source Code ↗" : "Inspect Source Code ↗"}
                    </a>
                    {"liveLink" in project && (
                      <a
                        href={(project as any).liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center block px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 hover:opacity-90 rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-cyan-500/10"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto py-16 md:py-24 px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold dynamic-text-contrast tracking-tight flex items-center justify-center gap-3">
              <span className="text-pink-500">✉</span> Contact
            </h2>
            <p className="text-slate-200 text-sm md:text-base mt-2 font-medium hero-desc-shadow">Currently open for technical deep dives or custom engineering solutions.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-slate-950/80 backdrop-blur-md border border-slate-800/80 p-5 sm:p-8 rounded-2xl shadow-xl transition-all">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={formStatus === "SUBMITTING"}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={formStatus === "SUBMITTING"}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                disabled={formStatus === "SUBMITTING"}
                className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition disabled:opacity-50"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                disabled={formStatus === "SUBMITTING"}
                className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition resize-y disabled:opacity-50"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === "SUBMITTING"}
              className="w-full py-3.5 rounded-lg text-white font-bold tracking-wide text-sm md:text-base bg-gradient-to-r from-blue-400 to-pink-500 hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {formStatus === "SUBMITTING" ? "Sending Message..." : "Send Message"}
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>

            {formStatus === "SUCCESS" && (
              <p className="mt-4 text-center text-sm font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 p-3 rounded-lg animate-fade-in">
                ✓ Message dispatched cleanly! I will reach out to you shortly.
              </p>
            )}
            {formStatus === "ERROR" && (
              <p className="mt-4 text-center text-sm font-medium text-rose-400 bg-rose-950/30 border border-rose-900/50 p-3 rounded-lg animate-fade-in">
                ✕ Transmission failed. Please try again or reach out directly via WhatsApp.
              </p>
            )}
          </form>
        </section>

        <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-900 py-10 px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/AbdulAzeemHashmi" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" aria-label="GitHub Profile Pipeline Lookup">
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://wa.me/923228535002" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400 transition drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" aria-label="Direct Chat via WhatsApp Connection Channel">
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.532 0 10.032-4.502 10.035-10.037.002-2.68-1.038-5.198-2.93-7.094C17.228 1.58 14.72 .54 12.01 .54 6.478.54 1.98 5.04 1.977 10.577c-.001 1.97.513 3.897 1.49 5.588L2.43 21.39l5.311-1.394z" /></svg>
            </a>
            <a href="https://www.instagram.com/abdulazeemhash" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-pink-400 transition drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" aria-label="Instagram Lifecycle Handle Feed Lookup">
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0C12 5.013 11.987 5.013 11.987 4.849zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
          <p className="text-[11px] md:text-xs text-slate-200 font-mono font-medium hero-desc-shadow">
            &copy; {new Date().getFullYear()} Abdul Azeem Hashmi. Built using Next.js & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}