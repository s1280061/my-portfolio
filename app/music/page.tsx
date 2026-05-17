const artists = [
  {
    name: "G-I•DLE",
    genre: "K-pop",
    url: "https://www.youtube.com/@official_i_dle",
  },
  {
    name: "MINNIE",
    genre: "K-pop",
    url: "https://www.youtube.com/watch?v=_lQxaYmt0DQ",
  },
  {
    name: "ITZY",
    genre: "K-pop",
    url: "https://www.youtube.com/@ITZY",
  },
  {
    name: "MOMOLAND",
    genre: "K-pop",
    url: "https://www.youtube.com/watch?v=txWmd7QKFe8",
  },
  {
    name: "aespa",
    genre: "K-pop",
    url: "https://www.youtube.com/@aespa",
  },
  {
    name: "Jay Chou (周杰倫) — 七里香",
    genre: "C-pop",
    url: "https://www.youtube.com/watch?v=Bbp9ZaJD_eA",
  },
];

const soundtracks = [
  {
    title: "The Last of Us OST",
    composer: "Gustavo Santaolalla",
    url: "https://music.youtube.com/playlist?list=OLAK5uy_nhz-Usf2TimQpx1_4olzmp4V5xRWFl-2Q&si=e4QcMVpITCXhPt9V",
  },
];

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-red-500" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="text-2xl font-bold mb-2 text-gray-100">Music</h1>
        <p className="text-gray-500 text-sm mb-1">I like music that feels cinematic, emotional, or nostalgic.</p>
        <p className="text-gray-500 text-sm mb-10">Recently listening to K-pop, C-pop, and game/film soundtracks.</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-semibold mb-5 text-gray-300">Artists</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {artists.map((a) => (
                a.url ? (
                  <a
                    key={a.name}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#7C8CFF] transition-colors group"
                  >
                    <span className="font-medium text-sm text-gray-200 group-hover:text-[#7C8CFF] transition-colors flex items-center gap-2">
                      <YoutubeIcon />
                      {a.name}
                    </span>
                    {a.genre && <span className="text-xs text-[#7C8CFF] bg-gray-800 px-2 py-0.5 rounded-full">{a.genre}</span>}
                  </a>
                ) : (
                  <div key={a.name} className="flex items-center justify-between p-4 bg-gray-900 rounded-xl border border-gray-800">
                    <span className="font-medium text-sm text-gray-200">{a.name}</span>
                    {a.genre && <span className="text-xs text-[#7C8CFF] bg-gray-800 px-2 py-0.5 rounded-full">{a.genre}</span>}
                  </div>
                )
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5 text-gray-300">Soundtracks</h2>
            <div className="space-y-3">
              {soundtracks.map((s) => (
                <a
                  key={s.title}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#7C8CFF] transition-colors group"
                >
                  <YoutubeIcon />
                  <div>
                    <p className="font-medium text-sm text-gray-200 group-hover:text-[#7C8CFF] transition-colors">{s.title}</p>
                    <p className="text-xs text-[#7C8CFF] mt-1">{s.composer}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
