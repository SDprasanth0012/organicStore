import React from 'react'
import styled from 'styled-components'
import banner from '../assets/banner.jpeg'
const Banner = () => {
  return (
    <Container>
        <h1>Fresh and NON-GMO Products</h1>
        <p>Elevate your lifestyle with our range of fresh, non-genetically modified products, where the pure essence of nature meets your plate, ensuring a delightful experience that's both wholesome and untainted by genetic modification</p>
    </Container>
  )
}
const Container = styled.div`
    background-image:url(${banner});
    background-size:cover;
    box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.5);
    height:300px;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    h1{
        font-size:50px;
        max-width:1200px;
        font-style:italic;
        text-align:center;
    }
    p{
        font-size:20px;
        color:rgba(255,255,255,0.6);
        max-width:800px;
        margin:0 auto;
    }
`
export default Banner