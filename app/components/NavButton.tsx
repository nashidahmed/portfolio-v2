"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ArrowDownIcon from "./icons/ArrowDownIcon";

interface NavButtonProps {
  title: string;
  link: string;
  key: number;
}

export default function NavButton({ title, link, key }: NavButtonProps) {
  return (
    <motion.div
      initial={{ flex: 1 }}
      animate={{ flex: 1 }}
      whileHover={{ flex: 1.5 }}
    >
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
          >
            {title}
          </motion.span>

          {/* Hover State (Bold Red with Arrow) */}
          <motion.div
            className={`absolute flex items-center justify-center gap-2.5`}
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <span className="text-6xl font-extrabold text-secondaryText">
              {title}
            </span>
            <ArrowDownIcon className="text-6xl text-secondaryText" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
