import styled  from 'styled-components'
import { Button } from './Button'
import{motion} from 'framer-motion'
import '../App.css'

const imgAnimate={
  offscreen:{x:500, opacity:0},
  onscreen:{x:0,
    opacity:1, 
    rotate: [0,10,0],
    transition:{
      type:"spring",
      bounce: 0.2,
      duration: 2}
  }

}
const paraAnimate={
  offscreen:{x:-500, opacity:0},
  onscreen:{x:0, 
    opacity:1,
    rotate: [0,10,0],
    transition:{
      type:"spring",
      bounce: 0.3,
      duration: 1}
  }

}

const textAnimate={
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
const Section = styled.section`
  width:100%;
  height: 100%;
  padding: 4rem 0rem;
`
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 820px){
    grid-template-columns: 1fr;
  }
`


const ColumnLeft = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 line-height: 1.4;
 padding: 1rem 3rem;
 order: ${({reverse})=> (reverse? '2': '1')};

 h1{
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
 }
 p{
  margin-bottom: 3rem;
 }
`
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  order: ${({reverse})=> (reverse? '1': '2')};

  @media screen and (max-width: 820px){
    order: ${({reverse})=> (reverse? '2': '1')}
  }
  img{
    width: 100%;
    height:100%;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 15px 15px 8px lightgrey;

    &:hover{
      box-shadow: none;
    }

    @media screen and (max-width: 820px){
       width: 90%;
       height:100%;
    }

  }
`

const Infosection = ({heading,paraOne,paratwo,buttonlabel,image}) => {
  return (
    <Section>
      <Container >
        <motion.div
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:false, amount:0.2}}
          transition={{staggerChildren:0.2}}
        >
          <ColumnLeft className='left'>
            <motion.h1 
              variants={textAnimate}
            >{heading}</motion.h1>
            <motion.p 
              variants={paraAnimate}
            >{paraOne}</motion.p>

            <motion.p 
              variants={paraAnimate}
            >{paratwo}</motion.p>

            <motion.div 
            variants={paraAnimate}
            >
              <Button  to='/home' primary='true'>{buttonlabel}</Button>
            </motion.div>
          </ColumnLeft>
          </motion.div>


          <motion.div 
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:false, amount:0.1}}
          
          >
          <ColumnRight >
          <motion.img src={image} alt="home" className='slideInRight'
            variants={imgAnimate}
          />
          </ColumnRight>
          </motion.div>
        
      </Container>
    </Section>
  )
}

export default Infosection
