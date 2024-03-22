import React, { useState } from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useMotionValueEvent } from 'framer-motion'
function ScrollTopButton() {

    const [vis,setVis]=useState(0)
    const {scrollYProgress}=useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (scrollYProgress.current>0.14){
            setVis(1)
        }else{
            setVis(0)
        }
      })

  return (
    <motion.div
    whileHover={{
        y:-7,
        transition:{repeat:Infinity,duration:0.75,repeatType:'reverse'}
      }}
    onClick={()=>{
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
      }}
      initial={{opacity:0}}
variants={{
    hidden:{display: 'none'},
    visible:{display:'flex',opacity:1},
}}
animate={vis?'visible':'hidden'}
transition={{duration:0.6}}
    className='flex hover:cursor-pointer items-center justify-center rounded-[50%] fixed bg-blue-700 h-[40px] w-[40px] right-5 bottom-5'>
      <i     
      class="fa-solid fa-angle-up" style={{color: "#000000"}}></i>
    </motion.div>
  )
}

export default ScrollTopButton
