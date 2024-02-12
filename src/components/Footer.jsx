import React from 'react'
import styled from 'styled-components'
import footer from '../assets/footer.jpeg'
const Footer = () => {
  return (
    <Container>
        <div className='sub-footer'>
            <div className='sub-footer-links'>
             About Our Team
            </div>
            <a href="">S D sai prasanth</a>
            <a href="">Javvaji Pawan kumar</a>
            <a href="">Nayineni Rama Rao</a>
            <a href="">Andrew Tate</a>
        </div>
        <div className='sub-footer'>
            <div className='sub-footer-links'>
            More Links
            </div>
            <a href=" ">orgaincs</a>
            <a href=" ">orgainzations</a>
            <a href=" ">our own plants</a>
            <a href=" ">achievments</a>
          
        </div>
        <div className='sub-footer'>
            <div className='sub-footer-links'>
            products
            </div>
            <a href="">Blogs</a>
            <a href="">News</a>
            <a href="">invester details</a>
        </div>
        <div className='sub-footer'>
            <div className='sub-footer-links'>
            Contact Us
            </div>
            <h5>Reach to us just leave a email</h5>
                <div  className='email'>
                <label for="email">Email : </label>
                <input type="email" placeholder='Enter your email'></input>
                <button> Send </button>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
    background-image:url(${footer});
    background-size:cover;
    box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.6);
    color:rgba(255,255,255,0.8);
    width:100%;
    height:400px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    padding:50px;
    .sub-footer{
        align-self:start;
        display:flex;
        flex-direction:column;
        .sub-footer-links{
            font-size:20px;
            margin-bottom:30px;
        }
        a{
            text-decoration : none;
            font-size:10px;
            color:white;
            margin:5px 0px;
        }
        label{
            font-size:20px;
            margin-right:20px;
        }
        input {
            background-color: rgba(0,0,0,0.5);
            border:1px green solid;
            border-radius: 5px;
        }
        button{
            color:black;
            background-color:green;
            align-self:center;
            border-radius: 20px;
            padding:5px 10px;
            border:none;
            margin-top:20px;
        }
    }
    
`
export default Footer