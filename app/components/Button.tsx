"use client";

import { motion } from "motion/react";
import { bigShoulders } from "../page";

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <motion.button
      className={`text-4xl font-semibold uppercase ${bigShoulders.className}`}
      initial={{ fontWeight: 600 }}
      whileHover={{
        fontWeight: 800,
        color: "#EF5235",
        transition: { type: "spring", mass: 1, stiffness: 100, damping: 15 },
      }}
    >
      {children}
    </motion.button>
  );
}
