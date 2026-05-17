"use client";

import { useState } from "react";
import Image from "next/image";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "/world-110m.json";

type Pin = {
  name: string;
  label: string;
  coordinates: [number, number];
  type: "lived" | "visited";
  photos?: { src: string; caption: string }[];
};

const pins: Pin[] = [
  { name: "愛知", label: "愛知", coordinates: [137.0, 35.1], type: "lived" },
  { name: "福島", label: "福島", coordinates: [140.5, 37.7], type: "lived" },
  { name: "福岡", label: "福岡", coordinates: [130.4, 33.6], type: "lived" },
  { name: "マカオ", label: "マカオ", coordinates: [113.5, 22.2], type: "visited", photos: [
    { src: "/travel/macau-1.jpg", caption: "IEEE BigData 2025 @ University of Macau" },
    { src: "/travel/macau-2.jpg", caption: "Galaxy Macau" },
    { src: "/travel/macau-3.jpg", caption: "Macau night lights" },
    { src: "/travel/macau-4.jpg", caption: "Galaxy Macau garden" },
  ]},
  { name: "バンコク", label: "Bangkok", coordinates: [100.5, 13.8], type: "visited" },
  { name: "ハノイ", label: "Hanoi", coordinates: [105.8, 21.0], type: "visited" },
  { name: "ソウル", label: "Seoul", coordinates: [126.9, 37.5], type: "visited", photos: [
    { src: "/travel/korea-1.jpg", caption: "Seoul cityscape" },
    { src: "/travel/korea-2.jpg", caption: "Korean food 🍲" },
    { src: "/travel/korea-3.jpg", caption: "Yonsei University" },
    { src: "/travel/korea-4.jpg", caption: "Yonsei University at sunset" },
  ]},
  { name: "インディアナ", label: "Indiana", coordinates: [-86.1, 39.8], type: "visited" },
  { name: "ボストン", label: "Boston", coordinates: [-71.0, 42.4], type: "visited" },
  { name: "ニューヨーク", label: "New York", coordinates: [-74.0, 40.7], type: "visited" },
  { name: "サンフランシスコ", label: "San Francisco", coordinates: [-122.4, 37.8], type: "visited" },
];

export default function WorldMap() {
  const [active, setActive] = useState<Pin | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClick = (pin: Pin) => {
    if (pin.photos) {
      setActive(pin);
      setPhotoIndex(0);
    }
  };

  const handleClose = () => setActive(null);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-950">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [20, 25] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1a1a2e"
                stroke="#2d2d4e"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#1e1e3f", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {pins.map((pin) => (
          <Marker
            key={pin.name}
            coordinates={pin.coordinates}
          >
            <g
              onClick={() => handleClick(pin)}
              style={{ cursor: pin.photos ? "pointer" : "default" }}
            >
              {pin.type === "lived" ? (
                <>
                  <circle r={6} fill="#7C8CFF" opacity={0.25} />
                  <circle r={3} fill="#7C8CFF" />
                </>
              ) : (
                <>
                  <circle r={5} fill="#a78bfa" opacity={0.2} />
                  <circle r={2.5} fill={pin.photos ? "#c4b5fd" : "#a78bfa"} />
                  {pin.photos && <circle r={4} fill="none" stroke="#c4b5fd" strokeWidth={1} opacity={0.6} />}
                </>
              )}
            </g>
            <title>{pin.label}{pin.photos ? " (クリックで写真)" : ""}</title>
          </Marker>
        ))}
      </ComposableMap>

      {/* Legend */}
      <div className="flex gap-6 px-5 pb-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#7C8CFF] inline-block" />
          <span className="text-xs text-gray-400">Lived</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#a78bfa] inline-block" />
          <span className="text-xs text-gray-400">Visited</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#c4b5fd] ring-1 ring-[#c4b5fd] inline-block" />
          <span className="text-xs text-gray-400">Tap for photos</span>
        </div>
      </div>

      {/* Photo popup */}
      {active && active.photos && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative bg-gray-950 border border-gray-700 rounded-2xl overflow-hidden max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={active.photos[photoIndex].src}
                alt={active.photos[photoIndex].caption}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{active.label}</p>
                <p className="text-xs text-gray-400">{active.photos[photoIndex].caption}</p>
              </div>
              {active.photos.length > 1 && (
                <div className="flex gap-2">
                  {active.photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === photoIndex ? "bg-[#7C8CFF]" : "bg-gray-600"}`}
                    />
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center text-sm hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
