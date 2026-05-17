import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="text-2xl font-bold mb-10 text-gray-100">Projects</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#7C8CFF] transition-colors group"
            >
              <h2 className="font-semibold mb-2 group-hover:text-[#7C8CFF] transition-colors">
                {project.title}
              </h2>
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
