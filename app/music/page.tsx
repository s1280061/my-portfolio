const artists = [
  { name: "G-I•DLE", genre: "K-pop" },
  { name: "MINNIE", genre: "K-pop" },
  { name: "ITZY", genre: "K-pop" },
  { name: "MOMOLAND", genre: "K-pop" },
  { name: "aespa", genre: "K-pop" },
  { name: "Jay Chou (周杰倫)", genre: "C-pop" },
  { name: "Like a Dream", genre: "Soundtrack" },
];

const soundtracks = [
  { title: "The Last of Us OST", composer: "Gustavo Santaolalla" },
];

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="text-2xl font-bold mb-2 text-gray-100">Music</h1>
        <p className="text-gray-500 text-sm mb-10">What I listen to.</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-semibold mb-5 text-gray-300">Artists</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {artists.map((a) => (
                <div key={a.name} className="flex items-center justify-between p-4 bg-gray-900 rounded-xl border border-gray-800">
                  <span className="font-medium text-sm text-gray-200">{a.name}</span>
                  <span className="text-xs text-[#7C8CFF] bg-gray-800 px-2 py-0.5 rounded-full">{a.genre}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5 text-gray-300">Soundtracks</h2>
            <div className="space-y-3">
              {soundtracks.map((s) => (
                <div key={s.title} className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                  <p className="font-medium text-sm text-gray-200">{s.title}</p>
                  <p className="text-xs text-[#7C8CFF] mt-1">{s.composer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
