import styled from 'styled-components'
import { Link } from 'react-scroll'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    font-size:0px;
    width:0px;
    

    li{
      padding:1rem 2rem;
    }
    
    @media (max-width: 820px){
      flex-flow: column nowrap;
      background-color: #B48E92;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transform: ${({open})=> open ? 'translateX(0)': 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;
      opacity:0.95;


      li{
        padding-bottom: 4rem;

        a{
          color: #f5f1ed;
          font-size: 1.2rem;
          text-decoration: none;
          opacity:1;
  
  
          &:hover{
            text-shadow: 0.2px 0.2px  #fff;
            cursor: pointer;
            font-size: 1.5rem;
            
  
          }
        }
        
      }
      

    }


`



const DropdownMenu = ({open}) => {
  
  return (
    <Ul open={open} >
      
            <li>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>HOME </Link>
              </li>

              <li>
             <Link to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT </Link>
              </li>

              <li>
              <Link to="project" spy={true} smooth={true} offset={50} duration={500}>PROJECTS </Link>
              </li>
              
            <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT US </Link>
              </li>
    </Ul>
  )
}

export default DropdownMenu
