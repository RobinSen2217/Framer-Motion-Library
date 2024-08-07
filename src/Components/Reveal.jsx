import React, { useEffect, useRef } from 'react'
import { easeOut, motion,useScroll, useTransform } from 'framer-motion'
function Reveal({content,refP}) {
  const ref=useRef(null)

  const {scrollYProgress}=useScroll({
    target:ref,
    container:refP,
    offset:[`start end`,`end start`],
  })
  const opacity=useTransform(scrollYProgress,[0,0.5,0.5,1],[0,1,1,0])
  const scale=useTransform(scrollYProgress,[0,0.5,0.5,1],[0,1,1,0])
  const x=useTransform(scrollYProgress,[0,0.5,0.5,1],[-50,200,200,-50])

  return (
    <>
    <motion.div style={{opacity,scale,x}} transition={{ease:'linear'}} ref={ref} className='my-10 text-5xl font-bold '>{content}
    </motion.div>

    </>
  )
}

export default Reveal
