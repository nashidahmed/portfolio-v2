"use client";

import { motion } from "framer-motion";

interface NavButtonProps {
  title: string;
  link: string;
  key: number;
}

export default function NavButton({ title, link }: NavButtonProps) {
  return (
    <motion.a
      href={link}
      className="relative flex flex-col items-center justify-center cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      {/* Default State (White Text) */}
      <motion.span
        className="text-primaryBg text-6xl font-semibold flex-1"
        variants={{
          initial: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.span>

      {/* Hover State (Bold Red with Arrow) */}
      <motion.div
        className="absolute flex items-center justify-center"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[#EF5235] text-6xl font-extrabold">{title}</span>
        <span className="text-[#EF5235] text-6xl">↓</span>
      </motion.div>
    </motion.a>
  );
}
