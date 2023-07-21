import styled from 'styled-components'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

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
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f4z43f3', 'template_sxnblcu', form.current, 'SvdWETN3IZs6JHLd6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  };

  return (
    <StyledContactForm id='contact'>
      <motion.h3
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{once:false, amount:0.1}}
      variants={textAnimate}
      >GET IN TOUCH</motion.h3>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder=' Full Name...' required />
      <label>Email</label>
      <input type="email" name="user_email" placeholder=' Valid Email...' required />
      <label>Message</label>
      <textarea name="message" placeholder='Write a message...' required />
      <input type="submit" value="Send" />
    </form>
    </StyledContactForm>
  )
}

export default Contact

const StyledContactForm = styled.div`
  height: 100vh;
  width:95vw;
  padding-left:3rem;
  padding-right:2rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3{
    text-align:center;
    font-weight: bold;
    font-size: 2rem;
  }
  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    width:100%;
    font-size: 16px;

    input{
      width: 100%;
      height: 45px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);

      &:focus{
        border: 2px solid #B48E92;
      }
    }
    textarea{
      max-width: 100%;
      min-width: 100%;
      width:100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 15px;
      border: 1px solid rgb(220, 220, 220);

      &:focus{
        border: 2px solid #B48E92;
      }
    }
    label{
      margin-top: 1rem;
    }
    input[type="submit"]{
      margin-top: 2rem;
      cursor: pointer;
      background: #B48E92;
      color: white;
      border: none;
      margin-bottom: 1rem;
      height: 50px;
      border-radius:30px;
    }
  }
`