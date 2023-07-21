import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
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
    padding: ${({big})=>(big ? '16px 40px': '14px 24px')};
    color: ${({primary}) =>(primary ? '#f5f1ed': '#B48E92')};
    font-size: ${({big}) =>(big ? '20px': '15px')};
    &:hover {
        transform: translateY(-2px)
    } 
    a{
        text-decoration: none;
        color:  #B48E92;

    }
`