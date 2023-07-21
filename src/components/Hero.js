import {useState , useRef, useEffect} from 'react'
import styled, {css} from 'styled-components'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'
import { motion } from 'framer-motion'
import { Button } from './Button'

const paraAnimate={
    offscreen:{y:-100, opacity:0},
    onscreen:{y:0, 
    opacity:1,
    rotate: [0,10,0],
    transition:{
      type:"spring",
      bounce: 0.3,
      duration: 1}
  }
  
  }

const HeroSection = styled.section`
    height:100vh;
    dispay: flex;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`
const HeroWrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

`


const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height:100%;

`
const HeroSlider = styled.div`
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    diplay: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity:0.4;
        background: linear-gradient(
            0deg, rgba(0,0,0,0.2) 0%, 
            0deg, rgba(0,0,0,0.2) 50%),
            0deg, rgba(0,0,0,0.6) 100%
    }
    img{
        position:absolute;
        top:0;
        left:0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100%-100px);
    margin-top: 350px;
    margin-left:50px;
    
    color: #fff;

    h1{
        font-size: clamp(1.2rem, 9vw, 2.5rem);
        font-weight: 400;
        text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
        text-align: left;
        margin-bottom: 0.55rem;
    }
    p{
        margin-bottom: 0.5rem;
        text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
        font-size: 20px;
        font-weight: 400;
    }
    

`
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
    margin-top: 0.1rem
`

const SliderButton = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
    display: flex;
    z-index: 10;

`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #f5f1ed;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: #B48E92;
        transform: scale(1.05)
    }
`
const Prev = styled(IoArrowBack)`
    ${arrowButtons}
`
const Next = styled(IoArrowForward)`
    ${arrowButtons}
`

const Hero = ({slides}) => {
   const[current, setCurrent]= useState(0)
   const length = slides.length
   const timeout = useRef(null)

   useEffect(()=>{
    const nextSlide =()=>{
        setCurrent(current =>(current ===length -1? 0: current + 1))
    }
     timeout.current = setTimeout(nextSlide, 2000)

     return function(){
        if(timeout.current){
            clearTimeout(timeout.current)
        }
     }
   },[current,length])


   const nextSlide =()=>{
    if(timeout.current){
        clearTimeout(timeout.current)
    }
    setCurrent(current===length-1 ? 0: current + 1)

   }
   const prevSlide =()=>{
    if(timeout.current){
        clearTimeout(timeout.current)
    }
    setCurrent(current=== 0 ? length - 1: current -1)

   }
   

  return (
    <HeroSection id='hero'> 
      <HeroWrapper>
        {slides.map((slide, index)=>(
            <HeroSlide key ={index}>
                {index===current &&(
                    <HeroSlider >
                        <motion.div  >

                            <motion.img src={slide.image} alt={slide.alt}
                                
                                variants={paraAnimate}
                            />
                        </motion.div>
                        
                            <HeroContent>
                                <motion.div
                                    initial={'offscreen'}
                                    whileInView={'onscreen'}
                                    viewport={{once:false, amount:0.4}}
                                    transition={{staggerChildren:0.4}}>

                                    <motion.h1
                                    variants={paraAnimate}
                                    >{slide.title}</motion.h1>

                                    <motion.p
                                    variants={paraAnimate}
                                    >{slide.price}</motion.p>
                                </motion.div>

                                <Button to={slide.path} primary='true'
                                    css={`max-width: 16px`}>
                                    {slide.label}
                                    <Arrow />
                                </Button>
                            </HeroContent>
                    </HeroSlider>
                )}
            </HeroSlide>
        ))}
        <SliderButton>
            <Prev onClick={prevSlide}/>
            <Next onClick={nextSlide}/>
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
