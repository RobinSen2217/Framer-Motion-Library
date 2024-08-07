import React from 'react'
import { useState } from 'react';  
import './Spotlight2.css'
import { motion } from 'framer-motion'
import useMousePosition from './useMousePosition';

function Spotlight2() {

  // "framer-motion": "11.0.10"   <-- Necessary version for effect to work smoothly

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 170 : 10;

  return (
    <>
    <div className='relative h-screen w-screen flex items-center justify-center'>
    <div className=' text-2xl text-white h-full w-full flex justify-center items-center'>
      <p className='w-[400px]'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, harum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente officia eos. Nobis saepe optio consequatur odit accusantium quo impedit.
      </p>
    </div>

    <motion.div
    animate={{
      WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
      WebkitMaskSize: `${size}px`,
      MaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
      MaskSize: `${size}px`,
    }}
    transition={{ type: "tween", ease: "backOut", duration:0.5}}
     className='mask absolute text-2xl w-full flex h-full justify-center items-center bg-primary'>
      <p 
          onMouseEnter={() => {setIsHovered(true)}}
          onMouseLeave={() => {setIsHovered(false)}}
          className='w-[400px]'
          >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, harum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente officia eos. Nobis saepe optio consequatur odit accusantium quo impedit.
      </p>
    </motion.div>
    </div>
    </>
  )
}

export default Spotlight2
