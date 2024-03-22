import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function ViewBasedAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <h1 className="mt-[100px] text-center text-3xl font-semibold">
        View based Animations
      </h1>
      <motion.div
        className=" w-full h-[40vh]"
        ref={ref}
        style={{
          background: isInView ? "purple" : "yellow",
          transition: "1s background",
        }}
      />
    </>
  );
}

export default ViewBasedAnimation;
