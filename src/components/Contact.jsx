export default function Contact({ darkMode }) {
  return (
    <section id="contact" className="py-24 px-6">
      <div
        className={`max-w-4xl mx-auto text-center rounded-[2rem] p-12 shadow-2xl transition-all duration-500 ${
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
          Feel free to contact me for collaboration, freelance work,
          internships, or exciting full stack development projects.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {/* EMAIL BUTTON */}
          <a
            href="mailto:yourmail@example.com?subject=Portfolio Contact&body=Hello Arpit,%0D%0A%0D%0AI visited your portfolio website and would like to connect with you."
            className="px-8 py-4 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Me
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/arpit-sharma-98614632b/"
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