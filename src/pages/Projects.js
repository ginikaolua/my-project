import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import React from 'react'

const textAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{x:0, 
      opacity:1,
      rotate: [0,10,0],
      transition:{
        type:"spring",
        bounce: 0.3,
        duration: 1}
    }
  
  }
const Projects = ({slides}) => {
    const [width, setWidth] =useState(0)
    const carousel = useRef()
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
  return (
    <div id='project'>
        <motion.h3 className='carahead'
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{once:false, amount:0.1}}
        variants={textAnimate}
        >Our Major Projects</motion.h3>
      <motion.div ref={carousel} className='carousel'whileTap={{cursor:'grabbing'}}>
        <motion.div drag='x'dragConstraints={{right:0, left: - width }} className='innerCarousel'>
            {slides.map((image,index)=>(
                <motion.div key={index} className='item'>
                    <img src={image.image} alt={image.alt} />
                </motion.div>
            ))}
        </motion.div>
             
      </motion.div>
      <h4 className='carah4'>Scroll → </h4>
    </div>
  )
}

export default Projects
