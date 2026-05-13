import { skills } from "../data/portfolioData";

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-500 mb-14">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`px-8 py-4 rounded-2xl shadow-lg hover:scale-110 transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white/70"
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}