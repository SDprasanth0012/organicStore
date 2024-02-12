import React from 'react'
import hero from '../assets/hero.jpeg'
import styled from 'styled-components'
const Hero = () => {
  return (
    <Container>
        <content>
            <h1>100% Organic</h1>
            <p>Immerse yourself in the wholesome goodness of nature's finest, where every product is crafted with care and love for a truly natural experience.</p>
            <button>Get help</button>
        </content>
    </Container>
  )
}
const Container = styled.div`
    display:flex;
    height:100vh;
    font-style:oblique;
    background-image:url(${hero});
    background-size:cover;
    box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.5);
    color:white;
    font-family : sans-serif;
    content {
        display :flex;
        flex-direction:column;
        max-widht:1200px;
        widht:100%;
        margin:0 auto;
        justify-content:center;
        align-items:center;
        h1 {
            font-size:80px;
            font-weight:bolder;
        }
        p {
            font-size:23px;
            margin:15px 0px;
            max-width:700px;
            letter-spacing : 2px;
            text-align:center;
        }
        button {
            color:inherit;
            padding : 15px 30px;
            font-size: 25px;
            border-radius: 30px;
            background-color:rgba(0,0,0,0.5);
            border: 1px white solid;
        }
    }
    

`
export default Hero