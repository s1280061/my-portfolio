import { publications } from "@/data/content";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="text-2xl font-bold mb-10 text-gray-100">Publications</h1>
        <div className="space-y-5">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#7C8CFF] transition-colors group"
            >
              <h2 className="font-semibold leading-snug mb-2 group-hover:text-[#7C8CFF] transition-colors">
                {pub.title}
              </h2>
              <p className="text-sm text-[#7C8CFF] mb-1">{pub.venue}</p>
              <p className="text-xs text-gray-500">{pub.date}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
