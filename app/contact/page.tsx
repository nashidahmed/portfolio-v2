"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Work", link: "#work" },
  { title: "About", link: "#about" },
  { title: "Contact", link: "./contact" },
  { title: "Journal", link: "#journal" },
  { title: "Resume", link: "#resume" },
];

export default function HoverExpandDivs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full h-64 gap-2 p-4">
      {navLinks.map((item, index) => (
        <motion.div
          key={index}
          className="h-full bg-transparent rounded-lg cursor-pointer flex items-center justify-center text-white font-semibold"
          initial={{ flex: 1, fontSize: "1rem" }}
          animate={{
            flex: hoveredIndex === index ? 3 : 1,
            fontSize: hoveredIndex === index ? "2rem" : "1rem",
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item.title}
        </motion.div>
      ))}
    </div>
  );
}
