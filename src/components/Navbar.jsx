import styled, {css} from 'styled-components'
import Burger from './Burger'
import { Link } from 'react-scroll'

const Nav = styled.nav`
    height: 55px;
    display: flex;
    background: #000;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 222;
    position: fixed;
    width: 100%
`
const NavLink = css`
    color: #f5f1ed;
    display: flex;
    flex-flow: row nowrap;
    padding: 0 1rem;
    align-items: center;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover{
        
        color: pink;
    }
`
const Logo = styled.div`
    ${NavLink};
    font-style:italic;
    font-size: 18px;
    font-weight: 100;
    text-shadow: 1px 1px  #fff;
    a{
        text-decoration: none;
        color: #B48E92;
    }
    &:hover {
        font-weight: bold;
        
        
    } 
    
`
const MenuBars = styled.i`
    display: none;
    
`
const NavBtn  =styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: 1.2rem;
    ul{
        li{
            a{
                background-color: ${({primary})=>(primary ? '#B48E92' : 'CD853F' )};
                white-space: nowrap;
                outline: none;
                border: none;
                min-width: 100px;
                max-width: 170px;
                cursor: pointer;
                text-decoration: none;
                transition: 0.3s;
                display: flex;
                justify-content: center;
                border-radius: 30px;
                align-items: center;
                padding:2rem;
                color: ${({primary}) =>(primary ? '#f5f1ed': '#B48E92')};
                font-size: ${({big}) =>(big ? '20px': '15px')};
                &:hover {
                    transform: translateY(-2px)
                } 
            }
        }
    }
    @media screen and (max-width: 820px){
        display: none;
    }
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    ul{
        display: flex;
        align-items: center;
        li{
            a{
                
                ${NavLink};
                
            }
            
        }
        @media screen and (max-width: 820px){
            display: none;
            
        }
    }
 
   
`


const Navbar = () => {
  return (
    <Nav>
        <Logo>
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>G'HOMES </Link>
            </Logo>
        <MenuBars />
        <Burger/>
        <NavMenu>
            <ul>
            <li>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>HOME </Link>
              </li>

              <li>
             <Link to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT </Link>
              </li>

              <li>
              <Link to="project" spy={true} smooth={true} offset={50} duration={500}>PROJECTS </Link>
              </li>
              </ul> 

        </NavMenu>       
        <NavBtn>
            <ul>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT US </Link>
              </li>
            </ul>
        </NavBtn>
    </Nav>

  )
}

export default Navbar
