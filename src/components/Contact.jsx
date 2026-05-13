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
        {/* Heading */}
        <h2 className="text-4xl font-bold text-sky-500 mb-6">
          Let's Connect
        </h2>

        {/* Description */}
        <p
          className={`text-lg mb-10 leading-relaxed ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Feel free to contact me for collaboration, freelance work,
          internships, or exciting full stack development projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">

          {/* CONTACT BUTTON */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arpit.sam2005@gmail.com&su=Portfolio%20Contact&body=Hello%20Arpit,%0A%0AI%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            className="px-8 py-4 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Me
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/arpit-sharma-98614632b/"
            target="_blank"
            className={`px-8 py-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-slate-600 text-slate-200 hover:bg-slate-700"
                : "border-sky-400 text-sky-500 hover:bg-sky-100 hover:text-black"
            }`}
          >
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/arpitsharma2005"
            target="_blank"
            className={`px-8 py-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-slate-600 text-slate-200 hover:bg-slate-700"
                : "border-sky-400 text-sky-500 hover:bg-sky-100 hover:text-black"
            }`}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}