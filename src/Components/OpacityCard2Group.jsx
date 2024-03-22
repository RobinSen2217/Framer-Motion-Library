import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
function OpacityCard2Group({ list }) {
  return (
    <div className="my-10 flex gap-x-5 mx-auto justify-evenly items-center w-3/4 ">
      {list.map((item, i) => {
        const [hover, setHover] = useState(false);
        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseEnter={() => {
              setHover(true);
              for (let I = 0; I < list.length; I++) {
                if (I !== i) {
                  document.getElementsByClassName("blurCard")[I].style.filter =
                    "blur(10px)";
                }
              }
            }}
            onMouseLeave={() => {
              setHover(false);
              for (let I = 0; I < list.length; I++) {
                if (I !== i) {
                  document.getElementsByClassName("blurCard")[I].style.filter =
                    "blur(0px)";
                }
              }
            }}
            className="blurCard relative ease-out overflow-hidden h-[300px] rounded-md flex  bg-center bg-cover bg-no-repeat flex-nowrap items-end w-1/4"
            style={{
              backgroundImage: `url(${item.img})`,
              transition: "filter 0.5s",
            }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={hover ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex w-full  flex-col gap-y-1 flex-nowrap px-2 pb-2 z-[2] "
            >
              <h1 className="text-left font-bold text-2xl text-white">
                {item.title}
              </h1>
              <p className="font-base text-md text-white">{item.desc}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default OpacityCard2Group;
