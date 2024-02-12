import React from 'react'
import styled from 'styled-components'
const Card = ({ele}) => {
  return (
    <Container>
       <img src={ele.img}/>
       <div className='data'>
            <h3>{ele.name}</h3>
            <p>{ele.details}</p>
            <button>Get Details</button>
       </div>
    </Container>
  )
}
const Container = styled.div`
   background-color:white;
   width:300px;
   height:400px;
   overflow:hidden;
   margin-bottom:20px;
   box-shadow:0px 2px 4px rgba(0,0,0,0.2);
   img {
    width:100%;
    height:auto;
   }
   .data{
     padding : 20px;
     display:flex;
     flex-direction:column;
     justify-content: center;
     align-items:center;
     h3{
        font-size:20px;
        font-style:italic;
        text-align:center;
        margin-bottom:8px;
     }
     p{ 
        overflow:hidden;
        font-size:10px;
        height:80px;
        marigin-bottom:8px;
        letter-sapcing:2px;
     }
     button{
        background-color:green;
        color:white;
        padding :2px;
        border-radius:10px;
        font-size:10px;
     }
   }
`;
export default Card