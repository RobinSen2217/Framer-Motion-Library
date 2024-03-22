import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RotateDiv() {
  const [vis, setVis] = useState(0);
  const handleVis = () => {
    setVis(!vis);
  };

  return (
    <>
      {/* <button type='btn' onClick={handleVis}>Visibility</button> */}
      <AnimatePresence mode="popLayout">
        {vis && (
          <motion.div
            className=" w-[300px] h-[300px] bg-red-500"
            initial={{
              rotate: "0deg",
              scale: 0, //size or ratio= 0
            }}
            animate={{
              rotate: "360deg",
              scale: 1, //size or ratio=1
            }}
            transition={{
              // type:'spring',
              duration: 1,
            }}
            exit={{
              rotate: "0deg",
              scale: 0, //size or ratio=0
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            recusandae delectus magni beatae nobis corporis expedita rem sed
            nisi quisquam, ab rerum impedit aspernatur ex facilis doloremque
            aliquid voluptatem saepe.
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="btn"
        layout
        className="border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white px-2 py-1 mb-3 mt-7"
        onClick={handleVis}
      >
        Visibility
      </motion.button>{" "}
      {/*layout makes the position change of button when smooth when div is removed/not visible */}
      {/* <AnimatePresence mode='popLayout'>     
    {vis&& <motion.div 
    className=' w-[300px] h-[300px] bg-red-500'
    initial={{
        rotate:'0deg',
        scale:0 //size or ratio= 0
    }}
    animate={{ 
        rotate:'360deg',
        scale:1, //size or ratio=1
    }}
transition={
    {duration:1}
}
    exit={{
        rotate:'0deg',
        scale:0,//size or ratio=0
    }}
    >Lorem ipsum dolor sit amet consectetur adipispe.
    </motion.div>}
    </AnimatePresence> */}
    </>
  );
}

export default RotateDiv;
