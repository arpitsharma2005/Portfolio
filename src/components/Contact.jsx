export default function Contact({ darkMode }) {
  return (
    <section id="contact" className="py-24 px-6">
      <div
        className={`max-w-4xl mx-auto text-center rounded-[2rem] p-12 shadow-2xl ${
          darkMode
            ? "bg-slate-800 border border-slate-700"
            : "bg-white/70"
        }`}
      >
        <h2 className="text-4xl font-bold text-sky-500 mb-6">
          Let's Connect
        </h2>

        <p
          className={`text-lg mb-10 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Feel free to connect with me for collaboration and frontend projects.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="mailto:yourmail@example.com"
            className="px-8 py-4 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 hover:scale-105 transition-all duration-300"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="px-8 py-4 border border-sky-400 text-sky-500 rounded-2xl hover:bg-sky-100 hover:text-black transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}