import { motion } from "framer-motion";
import profile from "../assets/car.jpg";

export default function About({ darkMode }) {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
      >
        {/* PROFILE IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src={profile}
              alt="Profile"
              className="w-[320px] h-[380px] object-cover rounded-[2rem] shadow-2xl border-4 border-sky-300 hover:scale-105 transition-all duration-500"
            />

            <div className="absolute inset-0 rounded-[2rem] bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-sky-500 mb-6">
            About Me
          </h2>

          <p
            className={`text-lg leading-relaxed mb-6 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I am a passionate Full Stack Developer focused on creating modern,
            responsive, and interactive web applications.
          </p>

          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            During my industrial training at Getnovative, I worked on AI-based
            image, video, and caption generation projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
}