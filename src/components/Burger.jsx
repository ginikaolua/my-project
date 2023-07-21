import styled from 'styled-components'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'

const StyleBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top:  20px;
    right: 20px;
    display: none;
    
    z-index: 20;

    @media (max-width: 820px){
        display: flex;
        justisfy-content: space-around;
        flex-flow: column nowrap;
    }


    div{
        
        height: 0.25rem;
        background-color: ${({open}) => open?'#f5f1ed': '#f5f1ed'};
        margin-bottom:5px;
        border-radius: 10px;
        transform-origin:1px;
        transition: all 0.3s linear;

        cursor: pointer;
       
        
        &:nth-child(1){
            width: 2rem;
            transform: ${({open}) => open? 'rotate(45deg)': 'rotate(0)'}
        }
        &:nth-child(2){
            width: 2.6rem;
            transform: ${({open}) => open? 'translateX(100%)': 'translateX(0)'};
            opacity: ${({open}) => open? 0: 1}
        }
        &:nth-child(3){
            width: 2rem;
            transform: ${({open}) => open? 'rotate(-45deg)': 'rotate(0)'}
        }
    }
`

const Burger = () => {
    const[open, setOpen] = useState(false)
  return (
    <>
    <StyleBurger open={open} onClick={()=> setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyleBurger>
    <DropdownMenu open={open} />
    </>
  )
}

export default Burger
