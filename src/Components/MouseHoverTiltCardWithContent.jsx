import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function MouseHoverTiltCardWithContent() {
  const x = useMotionValue(0); //default value 0
  const y = useMotionValue(0); //default value 0

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["8deg", "-8deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );
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
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", //bcoz effect is 3d using z transform,so necessary to add(must be added to all elements taking part in 3d effect/transformation)
        // transform:'rotateY(25deg)'
      }}
      className="relative w-[250px] h-[300px] bg-[url('https://images.unsplash.com/photo-1570284613060-766c33850e00?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RhcnJ5JTIwc2t5fGVufDB8fDB8fHww')] flex justify-center items-center mt-[40px]"
    >
      <div
        style={{
          transformStyle: "preserve-3d", //bcoz effect is 3d using z transform,so necessary to add(must be added to all elements taking part in 3d effect/transformation)
          transform: "translateZ(75px)",
        }}
        className="inset-4 absolute  border-2 border-white flex flex-col gap-y-2 justify-end px-3 py-3 items-end shadow-lg"
      >
        {/* <i
          className="fa-solid fa-arrow-pointer fa-lg"
          style={{
              color: "#000000",
              transform: "translateZ(75deg)",
          }}
          ></i> */}
        <p
          style={{
            transform: "translateZ(50deg)",
          }}
          className="text-center font-bold text-2xl text-white"
        >
          Night Sky
        </p>
      </div>
    </motion.div>
  );
}

export default MouseHoverTiltCardWithContent;
