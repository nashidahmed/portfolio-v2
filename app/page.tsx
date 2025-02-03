"use client";

import { Big_Shoulders_Display } from "next/font/google";
import { motion } from "framer-motion";
import { ReactFitty } from "react-fitty";
import NavButton from "./components/NavButton";

export const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function Home() {
  const navLinks = [
    { title: "Work", link: "#work" },
    { title: "About", link: "#about" },
    { title: "Contact", link: "./contact" },
    { title: "Journal", link: "#journal" },
    { title: "Resume", link: "#resume" },
  ];

  const name = "NASHID SHAH";

  const tagLines = [
    "Full Stack Dev",
    "Problem Solver",
    "Ideator",
    "Builder",
    "Creative Thinker",
  ];

  return (
    <header className="flex h-screen w-full flex-col bg-secondaryBg">
      {/* Navigation Bar */}
      <div className="px-20 pt-16">
        <ReactFitty className="w-full">
          <nav
            className={`${bigShoulders.className} flex justify-between font-semibold uppercase text-primaryBg`}
          >
            {navLinks.map(({ title, link }, index) => (
              <NavButton key={index} title={title} link={link} />
            ))}
          </nav>
        </ReactFitty>
      </div>

      {/* Name Banner */}
      <div className="flex flex-1 items-center justify-center px-20 font-extrabold">
        <ReactFitty className={`${bigShoulders.className}`}>
          <span className="relative inline-block">
            <span className="absolute inset-0 -translate-y-12 text-[#515AD4]">
              {name}
            </span>
            <span className="text-secondaryText absolute inset-0 -translate-y-6">
              {name}
            </span>
            <span className="relative text-primaryBg">{name}</span>
          </span>
        </ReactFitty>
      </div>

      {/* Tagline Section (Stays at Bottom) */}
      <div className="relative w-full overflow-hidden bg-[#F8EBDC] py-8 text-sm font-medium">
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
              {text} <span className="px-4 text-2xl text-[#D35152]">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
