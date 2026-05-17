"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/news", label: "News" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-white hover:text-[#7C8CFF] transition-colors">
          Kaito Asai
        </Link>
        <div className="flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-[#7C8CFF]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
