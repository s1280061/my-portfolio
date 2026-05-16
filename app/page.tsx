import Image from "next/image";
import { projects } from "@/data/projects";

const interests = [
  "Cooperative AI / V2X",
  "Vision-Language Models",
  "Human-centered mobility",
  "Multi-agent systems",
  "Explainable driving assistance",
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
            <h1 className="text-3xl font-bold mb-1">Kaito ASAI</h1>
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
                className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kaito-asai-267671393/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
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
