"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const variants = {
  initial: (isHome: boolean) => ({
    y: isHome ? 0 : "100%", // Start below if coming to home, otherwise no shift
    opacity: 0,
  }),
  enter: { y: "0%", opacity: 1 }, // Always slide to position
  exit: (isHome: boolean) => ({
    y: isHome ? 0 : "100%", // Slide down when exiting home, slide up otherwise
    opacity: 0,
  }),
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const key = usePathname();
  const isHome = key === "/";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        custom={isHome}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <FrozenRouter key={key}>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
