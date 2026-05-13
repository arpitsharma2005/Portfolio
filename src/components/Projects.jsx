import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-sky-500 mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2rem] shadow-2xl transition-all duration-500 ${
                darkMode
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white/70"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p
                className={`mb-6 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                className="text-sky-500 font-semibold"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}