"use client";

import { useState } from "react";

type Track = { title: string; url: string };

type Artist = {
  name: string;
  genre: string;
  url: string;
  tracks?: Track[];
};

const artists: Artist[] = [
  {
    name: "G-I•DLE",
    genre: "K-pop",
    url: "https://music.youtube.com/@official_i_dle?si=FMBCtBGIRY7Zcpxh",
    tracks: [
      { title: "Queencard", url: "https://music.youtube.com/watch?v=7HDeem-JaSY" },
      { title: "TOMBOY", url: "https://music.youtube.com/watch?v=Jh4QFaPmdss" },
      { title: "Nxde", url: "https://music.youtube.com/watch?v=fCO7f0SmrDc" },
      { title: "Super Lady", url: "https://music.youtube.com/watch?v=6f3RzjXPQwA" },
    ],
  },
  {
    name: "MINNIE",
    genre: "K-pop",
    url: "https://www.youtube.com/watch?v=_lQxaYmt0DQ",
    tracks: [
      { title: "HER", url: "https://music.youtube.com/watch?v=V8qJmPj1bTg" },
      { title: "Blind Eyes Red", url: "https://music.youtube.com/watch?v=M0Jc9s2Md7E" },
      { title: "Like a Dream", url: "https://music.youtube.com/watch?v=5v8Y9mWwqRc" },
      { title: "Obsession", url: "https://music.youtube.com/watch?v=R0kJmREfJ4Q" },
      { title: "Valentine's Dream", url: "https://music.youtube.com/watch?v=8Ck7Qq6Y8xM" },
      { title: "Expectations", url: "https://music.youtube.com/watch?v=R6jG3G4J9mQ" },
    ],
  },
  {
    name: "ITZY",
    genre: "K-pop",
    url: "https://music.youtube.com/watch?v=NcnkV85Xn_A&list=RDREH5AAqhGMEFONt9DSPUIWSw",
    tracks: [
      { title: "WANNABE", url: "https://music.youtube.com/watch?v=fE2h3lGlOsk" },
      { title: "DALLA DALLA", url: "https://music.youtube.com/watch?v=pNfTK39k55U" },
      { title: "LOCO", url: "https://music.youtube.com/watch?v=MjCZfZfucEc" },
      { title: "CAKE", url: "https://music.youtube.com/watch?v=0bIRwBpBcZQ" },
    ],
  },
  {
    name: "MOMOLAND",
    genre: "K-pop",
    url: "https://music.youtube.com/@momoland_official?si=QXdW95Uf-uye4n9h",
    tracks: [
      { title: "BAAM", url: "https://music.youtube.com/watch?v=JQGRg8XBnB4" },
      { title: "BBoom BBoom", url: "https://music.youtube.com/watch?v=txWmd7QKFe8" },
      { title: "Wrap Me in Plastic", url: "https://music.youtube.com/watch?v=tsN-MkpiZB0" },
      { title: "Yummy Yummy Love", url: "https://music.youtube.com/watch?v=TbuP2ypiTRc" },
    ],
  },
  {
    name: "aespa",
    genre: "K-pop",
    url: "https://music.youtube.com/watch?v=dYRITmpFbJ4&list=RDAMVMdYRITmpFbJ4",
    tracks: [
      { title: "Black Mamba", url: "https://music.youtube.com/watch?v=4TWR90KJl84" },
      { title: "Next Level", url: "https://music.youtube.com/watch?v=dYRITmpFbJ4" },
      { title: "Savage", url: "https://music.youtube.com/watch?v=phuiiNCxRMg" },
      { title: "Drama", url: "https://music.youtube.com/watch?v=WPdWvnAAurg" },
      { title: "Supernova", url: "https://music.youtube.com/watch?v=Os_heh8vPfs" },
      { title: "Armageddon", url: "https://music.youtube.com/watch?v=gj-lvvYQdiU" },
    ],
  },
  { name: "BLACKPINK", genre: "K-pop", url: "https://music.youtube.com/playlist?list=OLAK5uy_nsoD3Zf0AuDIGT89P_3UYvVS7-2rJRE0k" },
  { name: "Jay Chou (周杰倫) — 七里香", genre: "C-pop", url: "https://www.youtube.com/watch?v=Bbp9ZaJD_eA" },
];

const soundtracks = [
  {
    title: "The Last of Us OST",
    composer: "Gustavo Santaolalla",
    url: "https://music.youtube.com/playlist?list=OLAK5uy_nhz-Usf2TimQpx1_4olzmp4V5xRWFl-2Q&si=e4QcMVpITCXhPt9V",
  },
];

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-red-500 shrink-0" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

function ArtistCard({ artist }: { artist: Artist }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-[#7C8CFF] transition-colors">
      <div className="flex items-center justify-between p-4">
        <a
          href={artist.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-[#7C8CFF] transition-colors"
        >
          <YoutubeIcon />
          {artist.name}
        </a>
        <div className="flex items-center gap-2">
          {artist.genre && (
            <span className="text-xs text-[#7C8CFF] bg-gray-800 px-2 py-0.5 rounded-full">{artist.genre}</span>
          )}
          {artist.tracks && (
            <button
              onClick={() => setOpen(!open)}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              Tracks
              <svg
                viewBox="0 0 24 24"
                className={`w-3 h-3 fill-none stroke-current transition-transform ${open ? "rotate-180" : ""}`}
                strokeWidth={2}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {open && artist.tracks && (
        <div className="border-t border-gray-800 px-4 py-3 space-y-2">
          {artist.tracks.map((track) => (
            <a
              key={track.title}
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#7C8CFF] transition-colors"
            >
              <span className="text-gray-700">▶</span>
              {track.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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
                <ArtistCard key={a.name} artist={a} />
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
