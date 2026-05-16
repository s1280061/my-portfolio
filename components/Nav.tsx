export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-white">Portfolio</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#profile" className="hover:text-white transition-colors">About</a>
          <a href="#news" className="hover:text-white transition-colors">News</a>
          <a href="#publications" className="hover:text-white transition-colors">Publications</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
}
