const films = [
  { title: "Interstellar", year: "2014", type: "Film" },
  { title: "Whiplash (セッション)", year: "2014", type: "Film" },
  { title: "La La Land", year: "2016", type: "Film" },
  { title: "The Secret Life of Walter Mitty", year: "2013", type: "Film" },
  { title: "The Last of Us", year: "2023", type: "Series" },
  { title: "宇宙兄弟", year: "2012", type: "Anime" },
  { title: "進撃の巨人", year: "2013", type: "Anime" },
  { title: "Life is Strange", year: "2015", type: "Game" },
];

const typeColor: Record<string, string> = {
  Film: "text-[#7C8CFF]",
  Series: "text-emerald-400",
  Anime: "text-rose-400",
  Game: "text-amber-400",
};

export default function FilmsPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="text-2xl font-bold mb-2 text-gray-100">Films & Anime</h1>
        <p className="text-gray-500 text-sm mb-10">Favorites that left an impression.</p>

        <div className="space-y-3">
          {films.map((f) => (
            <div key={f.title} className="flex items-center justify-between p-4 bg-gray-900 rounded-xl border border-gray-800">
              <div>
                <p className="font-medium text-sm text-gray-200">{f.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{f.year}</p>
              </div>
              <span className={`text-xs font-medium ${typeColor[f.type]}`}>{f.type}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
