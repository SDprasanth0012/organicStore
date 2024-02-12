import React from 'react'
import styled from 'styled-components'
const Qcard = ({ele}) => {
  return (
    <Container>
         <h1>{ele.name}</h1>
         <p>{ele.text}</p>
    </Container>
  )
}
const Container = styled.div`
    
    width : 100%;
    height: auto;
    background-color:white;
    border:1px solid green;
    margin:30px auto;
    h1{
       color:green;
       text-align:center;
       font-size:30px;
       margin:10px 0
    }
    p{
       color:green;
       text-align:center;
       padding:10px;
    }
`
export default Qcard