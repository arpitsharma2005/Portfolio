export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-8 text-center border-t ${
        darkMode
          ? "border-slate-700 text-slate-400"
          : "border-sky-100 text-slate-500"
      }`}
    >
      © 2026 Arpit Portfolio • Built with React + Tailwind CSS
    </footer>
  );
}