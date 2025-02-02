"use client";

import { Big_Shoulders_Display } from "next/font/google";
import { motion } from "framer-motion";
import NavButton from "./components/NavButton";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function Home() {
  const navLinks = [
    { title: "Work", link: "#work" },
    { title: "About", link: "#about" },
    { title: "Contact", link: "#contact" },
    { title: "Journal", link: "#journal" },
    { title: "Resume", link: "#resume" },
  ];

  const tagLines = [
    "Full Stack Dev",
    "Problem Solver",
    "Ideator",
    "Builder",
    "Creative Thinker",
  ];

  return (
    <header className="w-full h-screen flex flex-col bg-secondaryBg">
      {/* Navigation Bar */}
      <nav
        className={`${bigShoulders.className} flex justify-between pt-16 px-20 uppercase text-6xl font-semibold text-primaryBg`}
      >
        {navLinks.map(({ title, link }, index) => (
          <NavButton key={index} title={title} link={link}></NavButton>
        ))}
      </nav>

      {/* Name Banner */}
      <div className="flex-1 flex items-center justify-center">
        <h1
          className={`${bigShoulders.className} text-6xl md:text-[281px] font-extrabold relative text-center leading-none`}
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 text-[#515AD4] -translate-y-12">
              NASHID SHAH
            </span>
            <span className="absolute inset-0 text-[#EF5235] -translate-y-6">
              NASHID SHAH
            </span>
            <span className="relative text-primaryBg">NASHID SHAH</span>
          </span>
        </h1>
      </div>

      {/* Tagline Section (Stays at Bottom) */}
      <div className="relative w-full bg-[#F8EBDC] text-sm font-medium py-8 overflow-hidden">
        <motion.div
          className="flex space-x-8 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Moves halfway, avoiding jumps
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 10,
          }}
          style={{ display: "flex", minWidth: "200%" }}
        >
          {/* Render the tagline twice for a seamless loop */}
          {[...tagLines, ...tagLines].map((text, index) => (
            <span key={index} className="text-4xl">
              {text} <span className="text-[#D35152] text-2xl px-4">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
