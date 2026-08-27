"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Briefcase,
  Building2,
  Calendar,
  Sparkles,
  Mail,
  Send,
  Check,
  Copy,
  FileText,
  Terminal,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  GraduationCap,
  MessageSquare,
  Layers,
  ChevronRight,
  CheckCircle2,
  Flame,
  Globe
} from "lucide-react";

// Brand SVG Icons
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.532 0 10.032-4.502 10.035-10.037.002-2.68-1.038-5.198-2.93-7.094C17.228 1.58 14.72 .54 12.01 .54 6.478.54 1.98 5.04 1.977 10.577c-.001 1.97.513 3.897 1.49 5.588L2.43 21.39l5.311-1.394z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0C12 5.013 11.987 5.013 11.987 4.849zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Types & Data
interface Service {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  highlight: string;
  tags: string[];
}

interface Internship {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

interface Project {
  title: string;
  category: "AI" | "Web Development";
  description: string;
  link: string;
  liveLink?: string;
  tags: string[];
  featured?: boolean;
}

interface SkillCategory {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  list: string[];
}

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const SERVICES: Service[] = [
  {
    title: "Autonomous AI & Agentic Systems",
    icon: BrainCircuit,
    desc: "Architecting autonomous agents, multi-tool reasoning workflows, LLM pipelines, and goal-driven AI workstations powered by Gemini, OpenAI, and LangChain.",
    highlight: "Expertise in Gemini API, LangChain, Tool Calling & Agentic RAG.",
    tags: ["Gemini API", "LangChain", "Autonomous Agents", "Prompt Engineering"],
  },
  {
    title: "Full-Stack Web & API Engineering",
    icon: Code2,
    desc: "Building production-grade, reactive web apps and scalable asynchronous backend APIs using Next.js, TypeScript, FastAPI, Flask, and Tailwind CSS.",
    highlight: "Proficient in Next.js App Router, TypeScript, Python & RESTful APIs.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Flask", "Tailwind CSS", "React"],
  },
  {
    title: "Database Architecture & Cloud Data",
    icon: Database,
    desc: "Designing robust relational and document database schemas with seamless persistence, real-time logging, and cloud data integrations.",
    highlight: "Experienced with Supabase, SQLite, MongoDB, MySQL, and Docker.",
    tags: ["Supabase", "SQLite", "MongoDB", "MySQL", "Docker", "Vercel"],
  },
];

const INTERNSHIPS: Internship[] = [
  {
    title: "AI Intern",
    company: "UAV Dependability Research Lab",
    period: "June 2026 - August 2026",
    location: "Islamabad, Pakistan",
    description:
      "Researched and engineered AI logic models for autonomous UAV systems, conducting dependability evaluations, waypoint route optimization, and rule compliance testing.",
    skills: ["Artificial Intelligence", "Autonomous Systems", "UAV Engineering", "Python", "Model Evaluation"],
  },
  {
    title: "Software Engineering Intern",
    company: "CODOC PVT LTD",
    period: "July 2026 - August 2026",
    location: "Islamabad, Pakistan",
    description:
      "Architected and implemented scalable software solutions, optimized full-stack application performance, and collaborated on modern agile software engineering workflows.",
    skills: ["Software Engineering", "Full-Stack Development", "TypeScript", "Next.js", "API Design"],
  },
];

const PROJECTS: Project[] = [
  {
    title: "Pak University Advisor",
    category: "Web Development",
    description:
      "Bilingual web application helping Pakistani students find the best university based on budget, location, and degree requirements.",
    link: "https://github.com/AbdulAzeemHashmi/pak-university-advisor",
    liveLink: "https://pak-university-advisor.vercel.app",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "HEC ODL Application Orchestrator",
    category: "AI",
    description:
      "Automated Open and Distance Learning application processing system for HEC with RAG, LangChain, and multi AI failover architecture.",
    link: "https://github.com/AbdulAzeemHashmi/hec-odl-application-orchestrator",
    liveLink: "https://hec-odl-application-orchestrator.vercel.app",
    tags: ["TypeScript", "LangChain", "RAG", "Next.js"],
    featured: true,
  },
  {
    title: "Agentic UAV Mission Planner",
    category: "AI",
    description:
      "AI powered UAV mission planning system that converts natural language commands into validated flight plans with safety checks and export options.",
    link: "https://github.com/AbdulAzeemHashmi/agentic-uav-mission-planner",
    liveLink: "https://agentic-uav-mission-planner-hdqzzyfj2nwqz3v4ss5wg5.streamlit.app/",
    tags: ["Python", "AI Agents", "Gemini API", "LangChain"],
    featured: true,
  },
  {
    title: "Developer Portfolio",
    category: "Web Development",
    description:
      "Interactive portfolio showcase featuring projects, skills, and contact details with fluid animations and responsive styling.",
    link: "https://github.com/AbdulAzeemHashmi/Portfolio",
    liveLink: "https://abdulazeemhashmi.vercel.app/",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    featured: true,
  },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: Terminal,
    desc: "Core foundations for building autonomous logic, backend algorithms, and user interfaces.",
    list: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "AI & Agents Frameworks",
    icon: BrainCircuit,
    desc: "APIs and tooling for architecting intelligent systems, LLM agents, and prompt workflows.",
    list: [
      "Gemini API",
      "LangChain",
      "RAG Architectures",
      "Streamlit",
      "Hugging Face",
      "Autonomous Agents",
      "Prompt Engineering",
    ],
  },
  {
    category: "Frameworks & Web Ecosystem",
    icon: Code2,
    desc: "Modern frameworks and tools for shipping fast, responsive, and resilient web platforms.",
    list: ["Next.js", "React", "FastAPI", "Flask", "Tailwind CSS", "Framer Motion", "Node.js", "REST APIs"],
  },
  {
    category: "Databases, Cloud & Tools",
    icon: Database,
    desc: "Data persistence layers, schema modeling, containerization, and deployment platforms.",
    list: ["Supabase", "SQLite", "MongoDB", "MySQL", "Vercel", "Docker", "Git", "GitHub", "Postman"],
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"All" | "AI" | "Web Development">("All");
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Section Observer for Active Nav Link
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "-25% 0px -55% 0px", threshold: 0 };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.href.replace("#", ""));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdulazeemhashmi29@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("SUBMITTING");

    try {
      const response = await fetch("https://formsubmit.co/ajax/abdulazeemhashmi29@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject || "General Inquiry"}`,
        }),
      });

      if (response.ok) {
        setFormStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("ERROR");
      }
    } catch {
      setFormStatus("ERROR");
    }
  };

  const filteredProjects =
    activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#06080f] text-slate-100 font-sans relative overflow-x-hidden">
      {/* Ambient Top Glow & Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Main Content Wrap */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#06080f]/80 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="#about" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                AA
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Abdul Azeem
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider">AI & Full-Stack-Developer</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav>
                <ul className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {NAV_LINKS.map((link) => {
                    const id = link.href.replace("#", "");
                    const isActive = activeSection === id;
                    return (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className={`px-3 py-1.5 rounded-md transition-all duration-200 relative ${
                            isActive
                              ? "text-cyan-400 font-semibold bg-white/[0.04]"
                              : "hover:text-slate-200 hover:bg-white/[0.02]"
                          }`}
                        >
                          {link.name}
                          {isActive && (
                            <motion.span
                              layoutId="nav-pill"
                              className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
                            />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="/Abdul_Azeem_Hashmi_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-700/50 hover:border-cyan-400 rounded-lg transition-all flex items-center gap-1.5 shadow-sm shadow-cyan-950/40"
                  aria-label="View CV in a new tab"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="#contact"
                  className="px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg transition-all shadow-md shadow-cyan-500/10 flex items-center gap-1.5"
                >
                  <span>Hire Me</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-cyan-400 p-2 rounded-lg bg-white/[0.03] border border-white/[0.08]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-[#06080f]/95 border-b border-white/[0.08] backdrop-blur-2xl px-6 py-6"
              >
                <ul className="flex flex-col gap-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      </a>
                    </li>
                  ))}
                  <li className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
                    <a
                      href="/Abdul_Azeem_Hashmi_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-700/50 rounded-lg"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Resume / CV</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-lg"
                    >
                      <span>Get In Touch</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section id="about" className="pt-32 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for AI & Full-Stack Projects</span>
            </div>

            {/* Profile Avatar */}
            <div className="relative mb-6">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-b from-cyan-400/40 via-indigo-500/20 to-transparent shadow-2xl shadow-cyan-500/10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/Gemini_Generated_Image_osw85zosw85zosw8.png"
                    alt="Abdul Azeem Hashmi"
                    fill
                    priority
                    sizes="(max-width: 768px) 144px, 176px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Status Mini Pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-cyan-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <GraduationCap className="w-3 h-3 text-cyan-400" />
                <span>FAST NUCES '24</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-tight max-w-6xl leading-tight mb-5 whitespace-nowrap">
              <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">Engineering Intelligent</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.55)]">
                AI Agents & Full-Stack
              </span>{" "}
              <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">Web Applications</span>
            </h1>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl leading-relaxed mb-8">
              Hi, I am <strong className="text-white font-semibold">Abdul Azeem Hashmi</strong>, an <span className="text-cyan-300 font-medium">AI & Backend Engineer</span> studying BS Artificial Intelligence at FAST NUCES, Islamabad. I build <span className="text-slate-100 font-medium">autonomous AI agents</span>, LLM-powered applications, and <span className="text-slate-100 font-medium">full-stack web experiences</span> focused on performance and modern design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Abdul_Azeem_Hashmi_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-semibold rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-medium rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] hover:border-white/[0.15] transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-white/[0.08] w-full max-w-4xl">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">5+</span>
                <span className="text-xs text-slate-400 mt-1">Shipped Projects</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 font-mono">2</span>
                <span className="text-xs text-slate-400 mt-1">Research & Dev Internships</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-indigo-400 font-mono">AI + Web</span>
                <span className="text-xs text-slate-400 mt-1">Core Specialization</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-mono">FAST NUCES</span>
                <span className="text-xs text-slate-400 mt-1">Batch of 2024</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services / Expertise */}
        <section id="services" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Specialized Engineering Services
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mt-2">
              Combining cutting-edge artificial intelligence with scalable, modern web application architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((srv, i) => {
              const IconComponent = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/[0.08]">
                    <p className="text-[11px] text-cyan-300 font-medium mb-3">
                      {srv.highlight}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience & Internships */}
        <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                <span>Track Record</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Experience & Internships
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              Industry and academic research internships focusing on autonomous systems and full-stack software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INTERNSHIPS.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/40">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {exp.title}
                  </h3>

                  <p className="text-sm font-semibold text-indigo-300 mb-4 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span>{exp.company}</span>
                  </p>

                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Matrix */}
        <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mt-2">
              The tools, frameworks, and programming languages I leverage to build production-grade software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((skillCat, i) => {
              const IconComponent = skillCat.icon;
              return (
                <motion.div
                  key={skillCat.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 md:p-8 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skillCat.category}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 mb-5 leading-relaxed">
                    {skillCat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skillCat.list.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-cyan-200 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Featured Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Engineered Projects
              </h2>
            </div>

            {/* Category Switcher Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-white/[0.08] backdrop-blur-md">
              {(["All", "AI", "Web Development"] as const).map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive ? "text-slate-950 font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="project-tab"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat === "Web Development" ? "Web Apps" : cat}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={project.title}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between group transition-all relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-0.5 rounded-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                          <Flame className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-xs leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-white/[0.08]">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all flex items-center justify-center gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/10"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something Exceptional
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-2">
              Have an idea, project, or role you'd like to discuss? Reach out directly or fill in the form.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Email Card with One-Click Copy */}
              <div className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:abdulazeemhashmi29@gmail.com"
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  abdulazeemhashmi29@gmail.com
                </a>
              </div>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/923039720693"
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:border-emerald-500/40 transition-all block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp
                    </h4>
                    <p className="text-xs text-slate-400">+92 303 9720693</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Location Card */}
              <div className="glass-card rounded-2xl p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Location</h4>
                  <p className="text-xs text-slate-400">Rawalpindi, Pakistan</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="glass-card rounded-2xl p-5">
                <h4 className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">Social Links</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/AbdulAzeemHashmi"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/923039720693"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:text-emerald-300 text-slate-300 transition-all"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/abdulazeemhash"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/40 hover:text-pink-300 text-slate-300 transition-all"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleFormSubmit}
                className="glass-card rounded-2xl p-6 sm:p-8 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={formStatus === "SUBMITTING"}
                      className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                      placeholder="e.g. Sarah Connor"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={formStatus === "SUBMITTING"}
                      className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                      placeholder="sarah@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    disabled={formStatus === "SUBMITTING"}
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    placeholder="AI Agent or Full-Stack Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    disabled={formStatus === "SUBMITTING"}
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-y"
                    placeholder="Describe your project, timeline, or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "SUBMITTING"}
                  className="w-full py-3 rounded-lg text-slate-950 font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {formStatus === "SUBMITTING" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {formStatus === "SUCCESS" && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Message delivered successfully! I will get back to you shortly.</span>
                  </div>
                )}

                {formStatus === "ERROR" && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <span>Message transmission failed. Please reach out directly on WhatsApp or Email.</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] bg-[#06080f]/90 py-10 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] font-mono">
                AA
              </span>
              <span className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} Abdul Azeem Hashmi. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
              <span>Next.js</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Framer Motion</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}