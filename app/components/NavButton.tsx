"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavButtonProps {
  title: string;
  link: string;
  key: number;
}

export default function NavButton({ title, link }: NavButtonProps) {
  return (
    <Link href={link}>
      <motion.div
        className="relative flex cursor-pointer flex-col items-center justify-center"
        initial="initial"
        whileHover="hover"
      >
        {/* Default State (White Text) */}
        <motion.span
          className="flex-1 text-6xl font-semibold text-primaryBg"
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
          <span className="text-secondaryText text-6xl font-extrabold">
            {title}
          </span>
          <span className="text-secondaryText text-6xl">↓</span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
