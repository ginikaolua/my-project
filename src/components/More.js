import {motion} from 'framer-motion'
import image from '../images/House9.jpg'

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
const More = () => {
  return (
    < >
      <motion.div id='about' className='aboutheading'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{once:false, amount:0.4}}
      transition={{staggerChildren:0.5}}
      >
      <motion.h1 
      variants={textAnimate}
      >ABOUT G'HOMES</motion.h1>

      <motion.p
      variants={textAnimate}>
        G'homes is a real estate company that also specializes in both interior and exterior decorations. Bringing you the best comfort at the most affordable prices
      </motion.p>
      </motion.div>
   <div className='aboutcontainer'> 
    <section className='aboutabout'>
      <div className='aboutimage'>
        
        <img src={image} alt="home"/>
      </div>
      <div className='aboutcontent'>
        <h2>
          GET FAMILIAR
        </h2>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur qui tempore vitae labore excepturi quam eaque incidunt, porro id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, reprehenderit aperiam? Accusantium at, omnis illo praesentium facilis similique fugiat autem nam minima debitis obcaecati rem voluptatibus ex, corporis et nemo.
        </p>
        <a href='#about' className='readmore'>Read More</a>
      </div>
    </section>
    </div>  


    </>
  )
}

export default More


