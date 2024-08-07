import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const NUM_SECTIONS =25 //total number of rotating sections
const PADDING=`${100/NUM_SECTIONS/2}vmin`  //padding of each section is calculated automatically

const generateSections=(count,color,rotate)=>{
  if(count===NUM_SECTIONS){
    return <></>   //manual ending of function if condition is true 
  }
  const nextColor=color==='black' ? 'white' : 'black'
  return(
    <Section rotate={rotate} background={color}>
{generateSections(count+1,nextColor,rotate)}  {/* infinite loop of calling of function, stopped if manual ending condition is true */}
    </Section>
  )
}

function Matrix() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

  return (
    <>
      <div ref={ref} className="relative z-0 h-[800vh]">
        <div className="h-screen sticky top-0">
          {" "}
          {/* sticky top-0 h-screen css combo with parent div position relative & height very large(here h-[800vh]) is very useful in similar scroll progress based animations */}
          <div className="absolute inset-0 overflow-hidden bg-black">
{generateSections(0,'black',rotate)}
          </div>
        </div>
      </div>
    </>
  );
}

const Section = ({ background, children, rotate }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{ background, rotate, padding: PADDING }}
    >{children}</motion.div>
  );
};
export default Matrix;
