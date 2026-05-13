export default function Navbar({ darkMode }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-500 ${
        darkMode
          ? "bg-slate-900/80 border-slate-700"
          : "bg-white/70 border-sky-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-black text-sky-500">
          Arpit.dev
        </h1>

        <div className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-sky-500 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}