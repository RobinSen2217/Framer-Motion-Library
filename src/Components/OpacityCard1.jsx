import React, { useState } from "react";
import { motion } from "framer-motion";

function OpacityCard1({ bgImg }) {
  const [hover, setHover] = useState(false);

  return (
    <div
    
    onMouseEnter={() => {
        setHover(true);
    }}
    onMouseLeave={() => {
        setHover(false);
    }}
    className="relative overflow-hidden  flex flex-nowrap items-end h-[300px] w-1/4"
    >
        <motion.div    
        initial={{ filter: "blur(0px)" }}
        animate={hover ?{filter: "blur(8px)" }:{ filter: "blur(0px)" }}
        transition={{duration: 0.3,ease: "linear"}}
          style={{ backgroundImage: `url(${bgImg})` }}
          className="absolute w-full h-full bg-center bg-cover bg-no-repeat"
        />

      <motion.div
        initial={{
          backgroundColor: "transparent",
          opacity: 0,
        //   backdropFilter: "blur(0px)",
        }}
        animate={
          hover
            ? {
                backgroundColor: "black",
                opacity: 0.4,
                // backdropFilter: "blur(8px)",
              }
            : {
                backgroundColor: "transparent",
                opacity: 0,
                // backdropFilter: "blur(0px)",
              }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute w-full h-full "
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={hover ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex w-full  flex-col gap-y-1 flex-nowrap px-2 pb-2 z-[2] "
      >
        <h1
         className="text-left font-semibold text-3xl text-white">Hello</h1>
        <p className="font-medium text-lg text-white">
          Lorem ipsum dolor sit amet. Exercitationem, corporis?
        </p>
      </motion.div>
    </div>
  );
}

export default OpacityCard1;
