import React from 'react'
import styled from 'styled-components'
import Card from './Card'
const Gallery = ({arr}) => {
  return (
    <Container>
       {arr.map(ele=>{
        return (
            <Card ele={ele} className='grid-item'/>
        )
       })}
    </Container>
  )
}
const Container = styled.div`
    background-color:#f0f0f0;
    display:flex;
    flex-wrap:wrap;
    justify-content: start;
    align-items: start;
    padding:30px;
    gap:40px;
`
export default Gallery