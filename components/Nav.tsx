"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const primary = [
  { href: "/", label: "About" },
  { href: "/news", label: "News" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
];

const personal = [
  { href: "/music", label: "Music" },
  { href: "/films", label: "Films" },
  { href: "/travel", label: "Travel" },
  { href: "/notes", label: "Notes" },
];

export default function Nav() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-colors text-sm ${
      pathname === href ? "text-[#7C8CFF]" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold text-white hover:text-[#7C8CFF] transition-colors shrink-0">
          Kaito Asai
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto">
          <div className="flex gap-5 shrink-0">
            {primary.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>
          <span className="mx-3 text-gray-700 shrink-0">|</span>
          <div className="flex gap-5 shrink-0">
            {personal.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
