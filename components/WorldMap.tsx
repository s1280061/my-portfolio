"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "/world-110m.json";

type Pin = {
  name: string;
  coordinates: [number, number];
  type: "lived" | "visited";
};

const pins: Pin[] = [
  // Lived
  { name: "愛知", coordinates: [137.0, 35.1], type: "lived" },
  { name: "福島", coordinates: [140.5, 37.7], type: "lived" },
  { name: "福岡", coordinates: [130.4, 33.6], type: "lived" },
  // Visited
  { name: "マカオ", coordinates: [113.5, 22.2], type: "visited" },
  { name: "バンコク", coordinates: [100.5, 13.8], type: "visited" },
  { name: "ハノイ", coordinates: [105.8, 21.0], type: "visited" },
  { name: "ソウル", coordinates: [126.9, 37.5], type: "visited" },
  { name: "インディアナ", coordinates: [-86.1, 39.8], type: "visited" },
  { name: "ボストン", coordinates: [-71.0, 42.4], type: "visited" },
  { name: "ニューヨーク", coordinates: [-74.0, 40.7], type: "visited" },
  { name: "サンフランシスコ", coordinates: [-122.4, 37.8], type: "visited" },
];

export default function WorldMap() {
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
          <Marker key={pin.name} coordinates={pin.coordinates}>
            {pin.type === "lived" ? (
              <>
                <circle r={6} fill="#7C8CFF" opacity={0.25} className="animate-ping" />
                <circle r={3} fill="#7C8CFF" />
              </>
            ) : (
              <>
                <circle r={5} fill="#a78bfa" opacity={0.2} className="animate-ping" />
                <circle r={2.5} fill="#a78bfa" />
              </>
            )}
            <title>{pin.name}</title>
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
      </div>
    </div>
  );
}
