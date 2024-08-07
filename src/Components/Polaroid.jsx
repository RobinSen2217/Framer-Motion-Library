import React from "react";
import { motion } from "framer-motion";
function Polaroid({ src, name, desig }) {
  return (
    <div className="relative">
      <figure className=' w-[400px]  bg-white p-3 before:content-[""] before:absolute before:h-[50px] before:w-[200px] before:bg-[rgba(102,102,102,0.6)] before:-rotate-[40deg] after:top-2 after:-left-14 after:content-[""] after:absolute after:h-[50px] after:w-[200px] after:bg-[rgba(102,102,102,0.6)] after:-rotate-[40deg] before:bottom-2 before:-right-16'>
        <div className="w-full h-fit bg-black">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            src={src}
            alt={name}
            className="object-cover w-full"
          />
        </div>
        <figcaption className="font-mono text-center my-2 font-semibold text-xl">
          {name}
        </figcaption>
        <figcaption className="font-mono text-center my-2 text-lg font-thin">
          {desig}
        </figcaption>
      </figure>
    </div>
  );
}

export default Polaroid;
