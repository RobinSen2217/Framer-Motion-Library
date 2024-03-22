import React from "react";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
function RotateTranslateDiv() {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    const sequence = [
      [scope.current, { scale: 0, y: -40 }],
      [scope.current, { x: -300, background: "#000000" }],
      [scope.current, { scale: 1 }, { duration: 0.8, type: "spring" }],
      [
        scope.current,
        { x: 300, rotate: "540deg" },
        { delay: 0.5, type: "spring", duration: 2.5 },
      ],
      [scope.current, { scale: 0 }, { duration: 0.8, type: "spring" }],
      [scope.current, { scale: 1 }, { duration: 0.8, type: "spring" }],
      [
        scope.current,
        { x: -300, rotate: "0deg" },
        { delay: 0.5, type: "spring", duration: 2.5 },
      ],
      [scope.current, { scale: 0 }, { duration: 0.8, type: "spring" }],
    ];
    // await animate(scope.current,{scale:0})
    await animate(sequence, { repeat: Infinity });
    // await animate(scope.current,{scale:0,x:-300})
    // await animate(scope.current,{scale:1},{duration:0.8,type:'spring'})
    // await animate(scope.current,{x:300,rotate:'720deg'},{delay:0.5,type:'spring',duration:3})
    // await animate(scope.current,{scale:0},{duration:0.8,type:'spring'})
    // await animate(scope.current,{scale:1},{duration:0.8,type:'spring'})
    // await animate(scope.current,{x:-300,rotate:'0deg'},{delay:0.5,type:'spring',duration:3})
    // await animate(scope.current,{scale:0},{duration:0.8,type:'spring'})
    // await animate(scope.current,{x:300})
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <>
      {/* <motion.div 
    layout
    className='mt-7 w-[200px] h-[200px] bg-green-600'
    initial={{
        rotate:'0deg',
        // scale:0, //size or ratio= 0
    }}
    animate={{ 
        rotate:'1080deg',
        scale:[0,1,1,1,1,1,1,1,0], //size or ratio=1
        x:[-320,-240,-160,-80,0,80,160,240,320]
    }}
    transition={{
    duration:5,
    ease:'linear',
    repeat:Infinity,
    repeatType:'reverse',
    times:[0.1,0.2,0.3,0.5,0.6,0.7,0.8,0.9,1]
}}
>
    </motion.div> */}
      <div className="my-[50px] mx-auto">
        <p className="text-white text-center relative z-30 mx-auto text-3xl top-[60px]">
          Hi,How are you doing
        </p>
        <div
          ref={scope}
          layout='true'
          className=" -z-20  w-[200px] h-[200px] bg-transparent"
        />
      </div>
    </>
  );
}

export default RotateTranslateDiv;
