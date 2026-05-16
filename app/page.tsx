import { projects } from "@/data/projects";

const interests = [
  "Cooperative AI / V2X",
  "Vision-Language Models",
  "Human-centered mobility",
  "Multi-agent systems",
  "Explainable driving assistance",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero / Profile */}
      <section id="profile" className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold shrink-0">
            K
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">Kaito Asai</h1>
            <p className="text-indigo-400 font-medium mb-4">
              AD/ADAS Engineer &amp; AI Researcher at Nissan Motor Co.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I explore cooperative intelligence, VLM-based driving assistance,
              and multi-agent systems for autonomous driving and parking scenarios.
            </p>
            <ul className="space-y-1 mb-6">
              {interests.map((item) => (
                <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href="https://github.com/s1280061"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-4 text-gray-300">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "PyTorch", "C++", "ROS", "LLM / VLM", "V2X", "ADAS", "LangGraph"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
            >
              {skill}
            </span>
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
