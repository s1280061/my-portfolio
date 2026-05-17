import { news } from "@/data/content";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="text-2xl font-bold mb-10 text-gray-100">News</h1>
        <div className="space-y-6">
          {news.map((item, i) => (
            <div key={i} className="flex gap-6 border-b border-gray-900 pb-6">
              <span className="text-xs text-[#7C8CFF] font-mono mt-0.5 w-20 shrink-0">{item.date}</span>
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
