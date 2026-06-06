"use client";

import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Self-Driving RC Car",
      category: "AI",
      description: "An intelligent remote-controlled vehicle powered by vision or AI logic models, combining software with automated hardware engineering.",
      link: "https://github.com/AbdulAzeemHashmi/RC-CAR",
      tags: ["Python", "AI", "Computer Vision"],
    },
    {
      title: "Probability & Statistics Analyzer",
      category: "AI",
      description: "Data analysis platform leveraging mathematical and statistical models for predictive analytics and computational insights.",
      link: "https://github.com/AbdulAzeemHashmi/Probability-and-Statistics-Project",
      tags: ["Python", "Pandas", "Matplotlib", "Statistics"],
    },
    {
      title: "Database Systems Open Ended Lab",
      category: "AI",
      description: "Advanced query building and logical database architecture specialized for intelligent data processing pipelines.",
      link: "https://github.com/AbdulAzeemHashmi/Database-Systems-Open-Ended-/Lab",
      tags: ["SQL", "Data Pipeline", "Database Design"],
    },
    {
      title: "Aether Student Portal",
      category: "Web Development",
      description: "Full-stack educational management portal featuring secure user roles, interactive dashboards, and scalable architectures.",
      link: "https://github.com/AbdulAzeemHashmi/Aether-Student-Portal",
      tags: ["HTML/CSS", "JavaScript", "Node.js", "Backend Design"],
    },
    {
      title: "Personal Next.js Portfolio",
      category: "Web Development",
      description: "The source code of this modern, lightning-fast portfolio built with Next.js and Tailwind CSS, fully deployed to Vercel.",
      link: "https://github.com/AbdulAzeemHashmi/Portfolio",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Database Systems Lab Project",
      category: "Web Development",
      description: "Dynamic web application seamlessly integrating front-end user experience with fully optimized relational databases.",
      link: "https://github.com/AbdulAzeemHashmi/Database-Systems-Lab-Project",
      tags: ["Web App", "MySQL", "Relational Mapping"],
    },
    {
      title: "Rush Hour Traffic Game",
      category: "Game Development",
      description: "A logic-heavy strategic puzzle game built with algorithmic board state validations and optimized state evaluation.",
      link: "https://github.com/AbdulAzeemHashmi/Rush-Hour-Game",
      tags: ["C++", "Data Structures", "Game Loop"],
    },
    {
      title: "Word Shooter Arcade Game",
      category: "Game Development",
      description: "Fast-paced interactive application with dynamic collision handling, scoring algorithms, and clean asset execution.",
      link: "https://github.com/AbdulAzeemHashmi/Word-Shooter-Game",
      tags: ["C++", "OOP", "Arcade Architecture"],
    },
    {
      title: "Classic Retro Snake Game",
      category: "Game Development",
      description: "Pure C++ logic implementation of the classical snake game incorporating dynamic arrays and precise console rendering.",
      link: "https://github.com/AbdulAzeemHashmi/Snake-Game",
      tags: ["C++", "Data Structures", "Memory Management"],
    },
    {
      title: "911 Emergency Data Analysis",
      category: "Database",
      description: "Exploratory analysis on massive datasets of 911 emergency calls utilizing document schemas inside MongoDB.",
      link: "https://github.com/AbdulAzeemHashmi/911-Emergency-Analysis-Mongo-DB",
      tags: ["MongoDB", "NoSQL", "Data Cleaning", "JSON Schemas"],
    },
    {
      title: "Instagram Lifestyle DB Analysis",
      category: "Database",
      description: "Complex relational model analyzing user actions, trends, and lifecycle data metrics inside modern social frameworks.",
      link: "https://github.com/AbdulAzeemHashmi/Instagram-Lifestyle-DB-Analysis",
      tags: ["MySQL", "Relational Schema", "Complex Queries"],
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const skills = [
    {
      category: "Programming Languages",
      icon: "💻",
      list: ["Python", "C++", "SQL", "JavaScript", "HTML", "CSS"],
      desc: "Core languages used for building logic, algorithms, and interfaces."
    },
    {
      category: "Data & Artificial Intelligence",
      icon: "🧠",
      list: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "EDA", "Machine Learning"],
      desc: "Libraries and workflows for extracting insights and training predictive models."
    },
    {
      category: "Databases & Architecture",
      icon: "🗄️",
      list: ["MySQL", "MongoDB", "Relational Database Design", "ERD Modeling", "Query Optimization"],
      desc: "Designing secure, scalable, and efficient data storage solutions."
    },
    {
      category: "Tools & Environments",
      icon: "🛠️",
      list: ["Linux (Ubuntu)", "Node.js", "Git / GitHub", "VS Code", "Jupyter / Colab"],
      desc: "Professional environments and version control for seamless development."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center border-b border-slate-900">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
        
        <span className="text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-6 uppercase">
          FAST NUCES Islamabad • Batch '24
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Abdul Azeem Hashmi</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-8">
          A passionate <span className="text-cyan-300 font-medium">BS Artificial Intelligence</span> student building clean backend architectures, relational data pipelines, performant low-level engines, and interactive web tools.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-cyan-500/20">
            View My Projects
          </a>
          <a href="#contact" className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition text-slate-300 font-medium">
            Contact Me
          </a>
        </div>
      </header>

      {/* Skills Matrix Section (Updated to match project cards) */}
      <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-cyan-500">//</span> Technical Skills
          </h2>
          <p className="text-slate-400 text-sm mt-1">My core competencies and technology stack.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition">
                  {skill.category}
                </h3>
              </div>
              <p className="text-slate-400 text-sm mb-4 font-light">{skill.desc}</p>
              <div className="flex flex-wrap gap-2">
                {skill.list.map((item, idx) => (
                  <span key={idx} className="bg-slate-950 border border-slate-800 text-cyan-300 px-3 py-1.5 rounded-md text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Filterable Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6 border-t border-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-cyan-500">//</span> Engineering Portfolio
            </h2>
            <p className="text-slate-400 text-sm mt-1">Filtered codebase architectures mapping specialized domains.</p>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-900/60 border border-slate-900 p-1.5 rounded-xl">
            {["All", "AI", "Web Development", "Game Development", "Database"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition uppercase ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat === "Web Development" ? "Web" : cat === "Game Development" ? "Games" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Display Grids */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-900 rounded-xl p-6 flex flex-col justify-between hover:border-slate-800/80 hover:bg-slate-900/50 transition-all duration-300 relative group">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold bg-indigo-950/40 border border-indigo-900/50 px-2 py-0.5 rounded mb-4 inline-block">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded border border-slate-900">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block px-4 py-2 bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 rounded-lg text-xs font-semibold text-slate-300 transition-all border border-slate-800 hover:border-cyan-500"
                >
                  Inspect Source Code ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-3xl mx-auto py-20 px-6 border-t border-slate-900">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <span className="text-pink-500">//</span> Get In Touch
          </h2>
          <p className="text-slate-400 text-sm mt-2">Currently open for technical deep dives or custom engineering solutions.</p>
        </div>

        <form 
          action="https://formsubmit.co/abdulazeem7982@gmail.com" 
          method="POST" 
          className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl shadow-xl"
        >
          {/* FormSubmit Configuration (Hidden fields) */}
          <input type="hidden" name="_subject" value="New submission from Portfolio!" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input 
                type="text" 
                name="name"
                required 
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
              <input 
                type="email" 
                name="email"
                required 
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
            <input 
              type="text" 
              name="subject"
              required 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              placeholder="Project Inquiry"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea 
              name="message"
              required 
              rows={5}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition resize-y"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 rounded-lg text-white font-bold tracking-wide text-lg bg-gradient-to-r from-blue-400 to-pink-500 hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
          >
            Send Message 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </form>
      </section>

      {/* Modern Footers & Connect Section */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 px-6 text-center max-w-6xl mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://github.com/AbdulAzeemHashmi" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition group" title="GitHub">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://wa.me/923228535002" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500 hover:text-emerald-400 transition group" title="WhatsApp">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.532 0 10.032-4.502 10.035-10.037.002-2.68-1.038-5.198-2.93-7.094C17.228 1.58 14.72 .54 12.01.54 6.478.54 1.98 5.04 1.977 10.577c-.001 1.97.513 3.897 1.49 5.588L2.43 21.39l5.311-1.394z"/></svg>
          </a>
          <a href="https://www.instagram.com/abdulazeemhash" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-pink-500 hover:text-pink-400 transition group" title="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>

        <p className="text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Abdul Azeem Hashmi. Built using Next.js & Tailwind CSS.
        </p>
      </footer>

    </div>
  );
}
