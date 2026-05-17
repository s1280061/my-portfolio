"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 rounded-2xl border border-gray-800 bg-gray-950 flex items-center justify-center">
      <span className="text-gray-600 text-sm">Loading map...</span>
    </div>
  ),
});

const lived = [
  { place: "愛知", note: "20 years" },
  { place: "福島", note: "4 years" },
  { place: "福岡", note: "2 years" },
];

const visited = [
  { place: "マカオ", flag: "🇲🇴" },
  { place: "バンコク", flag: "🇹🇭" },
  { place: "ハノイ", flag: "🇻🇳" },
  { place: "韓国", flag: "🇰🇷" },
  { place: "インディアナ州 (USA)", flag: "🇺🇸" },
  { place: "ボストン (USA)", flag: "🇺🇸" },
  { place: "ニューヨーク (USA)", flag: "🇺🇸" },
  { place: "サンフランシスコ (USA)", flag: "🇺🇸" },
];

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="text-2xl font-bold mb-2 text-gray-100">Travel</h1>
        <p className="text-gray-500 text-sm mb-8">Places I&apos;ve lived and visited.</p>

        <div className="mb-12">
          <WorldMap />
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-semibold mb-5 text-gray-300">Lived</h2>
            <div className="space-y-3">
              {lived.map((l) => (
                <div key={l.place} className="flex items-center justify-between p-4 bg-gray-900 rounded-xl border border-gray-800">
                  <span className="font-medium text-sm text-gray-200">🇯🇵 {l.place}</span>
                  <span className="text-xs text-[#7C8CFF]">{l.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5 text-gray-300">Visited</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {visited.map((v) => (
                <div key={v.place} className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                  <span className="text-sm text-gray-200">{v.flag} {v.place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
