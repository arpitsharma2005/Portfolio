import { motion } from "framer-motion";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="uppercase tracking-[0.3em] text-sky-500 mb-4">
          Full Stack Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Building Modern
          <span className="text-sky-500"> Web Experiences</span>
        </h1>

        <p
          className={`max-w-2xl mx-auto text-lg mb-8 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Passionate about creating responsive, animated, and interactive web
          applications.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 bg-sky-500 text-white rounded-2xl hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="px-8 py-4 border border-sky-400 text-sky-500 rounded-2xl hover:bg-sky-100 hover:text-black transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}