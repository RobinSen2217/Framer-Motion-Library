import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

function ScrollBarProgressAnimation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(29, 29, 242)", "rgb(232, 23, 218)", "rgb(232, 23, 23)"]
  );
  return (
    <motion.div
      className="sticky top-0 h-[8px] w-[100%] bg-blue-600 origin-left z-[20]"
      style={{ scaleX, backgroundColor }}
    />
  );
}

export default ScrollBarProgressAnimation;
