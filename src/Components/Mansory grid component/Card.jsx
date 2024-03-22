import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Card({ setSelected, item }) {
  const x = useMotionValue(0); //default value 0
  const y = useMotionValue(0); //default value 0

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect(); //getBundingClientRect() gives x,y coordinates of target element relative to card & top,bottom,left,right coordinates of target element & height,width of target element relative to viewport

    const width = rect.width; //width of target element relative to viewport
    const height = rect.height; //height of target element relative to viewport

    const mouseX = e.clientX - rect.left; //e.clientX gives x coordinate of mouse pointer relative to viewport and rect.left gives distance of left side of element from left end of viewport. Therefore, e.clientX-rect.left gives y coordinate of mouse pointer relative to target element
    const mouseY = e.clientY - rect.top; //e.clientY gives y coordinate of mouse pointer relative to viewport and rect.top gives distance of top side of element from top end of viewport. Therefore, e.clientY-rect.top gives y coordinate of mouse pointer relative to target element

    const xPct = mouseX / width - 0.5; //value of mouseX in decimal or percent form in roange of -0.5 to 0.5
    const yPct = mouseY / height - 0.5; //value of mouseY in decimal or percent form in roange of -0.5 to 0.5

    x.set(xPct); //setting value of x motion value to xPct
    y.set(yPct); //setting value of y motion value to yPct
  };

  return (
    <>
      <div className="inline-block w-full">
        <motion.div
          className={`flex justify-center items-center mt-[20px] mx-auto justify-self-center place-items-center `}
        >
          <motion.img
          layout
            layoutId={item.id}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d", //bcoz effect is 3d using z transform,so necessary to add(must be added to all elements taking part in 3d effect/transformation)
            }}
            onClick={() => {
              setSelected(item);
            }}
            className="mx-auto inline h-fit w-fit shadow-gray-500 hover:cursor-pointer shadow-xl"
            src={item.url}
            alt=""
          />
        </motion.div>

        <div className="flex flex-wrap mt-5 justify-center gap-3">
          {item.tags.map((tag) => {
            return (
              <span key={tag} className="py-1 px-2 bg-slate-300 rounded-md">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
