import Image from "next/image";
import { projects } from "@/data/projects";

const interests = [
  "Cooperative AI / V2X",
  "Vision-Language Models",
  "Human-centered mobility",
  "Multi-agent systems",
  "Explainable driving assistance",
];

const experience = [
  {
    role: "AD/ADAS Engineer & AI Researcher",
    org: "Nissan Motor Co.",
    period: "2026 – Present",
  },
];

const education = [
  {
    degree: "M.S. in Automotive Science",
    school: "Kyushu University",
  },
  {
    degree: "B.E. in Computer Science and Engineering",
    school: "Kyushu University",
  },
];

const news = [
  {
    date: "Apr 2026",
    text: "Joined Nissan Motor Co. as AD/ADAS Engineer & AI Researcher.",
  },
  {
    date: "Mar 2026",
    text: "Presented at IEICE Technical Committee on Intelligent Transport Systems (ITS) 2026.",
  },
  {
    date: "Mar 2026",
    text: "Received Graduate School Award — Kyushu University Graduate School of Integrated Frontier Sciences.",
  },
  {
    date: "Dec 2025",
    text: 'Paper accepted & presented at IEEE BigData 2025: "RiSA: Risk-aware Situational Assistant: From Risk Forecasting to Actionable Driver Advice."',
  },
  {
    date: "Dec 2025",
    text: "Received IEEE BigData 2025 Travel Award from the IEEE BigData 2025 Organizing Committee.",
  },
];

const publications = [
  {
    title:
      "A Quantitative Analysis of Driving Advice Capabilities of the Vision-Language Model LLaVA",
    venue: "IEICE Technical Committee on Intelligent Transport Systems (ITS)",
    date: "Mar 3, 2026",
    url: "https://ken.ieice.org/ken/paper/20260303HcsS/",
  },
  {
    title:
      "RiSA: Risk-aware Situational Assistant: From Risk Forecasting to Actionable Driver Advice",
    venue: "2025 IEEE International Conference on Big Data (IEEE BigData 2025)",
    date: "Dec 11, 2025",
    url: "https://ieeexplore.ieee.org/abstract/document/11401483/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero / Profile */}
      <section id="profile" className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-gray-700">
            <Image
              src="/avatar.jpg"
              alt="Kaito ASAI"
              width={112}
              height={112}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">Kaito Asai</h1>
            <p className="text-indigo-400 font-medium mb-4">
              AD/ADAS Engineer &amp; AI Researcher at Nissan Motor Co.
            </p>
            <p className="text-gray-400 leading-relaxed mb-2">
              I explore cooperative intelligence and VLM-based driving assistance
              for autonomous driving and parking scenarios.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My recent work focuses on cooperative perception,
              multi-agent reasoning, and human-centered mobility systems.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/s1280061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kaito-asai-267671393/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-4 text-gray-300">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "VLM", "Multi-Agent", "V2X", "ADAS", "PyTorch"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Experience</h2>
            <div className="space-y-3">
              {experience.map((e) => (
                <div key={e.role}>
                  <p className="font-medium text-gray-200 text-sm">{e.role}</p>
                  <p className="text-sm text-indigo-400">{e.org}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{e.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Education</h2>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="font-medium text-gray-200 text-sm">{e.degree}</p>
                  <p className="text-sm text-indigo-400">{e.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-6 text-gray-300">News</h2>
        <div className="space-y-4">
          {news.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-xs text-indigo-400 font-mono mt-0.5 w-20 shrink-0">{item.date}</span>
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-6 text-gray-300">Publications</h2>
        <div className="space-y-5">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-gray-900 rounded-xl border border-gray-800 hover:border-indigo-500 transition-colors group"
            >
              <h3 className="font-semibold leading-snug mb-2 group-hover:text-indigo-400 transition-colors">
                {pub.title}
              </h3>
              <p className="text-sm text-indigo-400 mb-1">{pub.venue}</p>
              <p className="text-xs text-gray-500">{pub.date}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-xl font-semibold mb-6 text-gray-300">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-gray-900 rounded-xl border border-gray-800 hover:border-indigo-500 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-800 rounded text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
