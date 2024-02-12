import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <Container className='nav-bar'>
        <div className='title'> Green </div>
        <ul className='list'>
            <li className='list-item'>Home</li>
            <li className='list-item'>About</li>
            <li className='list-item'>Gallery</li>
            <li className='list-item'>Contact</li>
        </ul>
    </Container>
  )
}
const Container = styled.header`

    display:flex;
    justify-content : space-between;
    position :sticky;
    top:0;
    z-index:2;
    width:100%;
    height:110px;
    border:1px balck solid;
    background-color:white;
    .title {
        font-size:50px;
        color:green;
        margin :16px;
        font-weight :bold;
        text-decoration : none;
    }
    .list {
        display : flex;
        align-self:end;
        justify-content: end;
        align-items: center;
        padding : 30px;
         .list-item{
             list-style: none;
             font-size: 20px;
             text-align: center;
             width:100%;
             padding : 20px;
             color:gray;
        }
        .list-item:hover {
            //background-color: gray;
            border-radius:50px;
            color:black;
            font-weight:bold;
        }
    }
`
export default Header