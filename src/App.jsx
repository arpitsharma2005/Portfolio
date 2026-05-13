import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-slate-800"
      }`}
    >
      {/* THEME BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-8 right-8 z-50 bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
      </button>

      <Navbar darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}