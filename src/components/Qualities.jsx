import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { qarr } from '../QualityArr'
import Qcard from './Qcard'
const Qualities = () => {
  return (
    <Container>
        <div className='grid'>

       {   qarr.map(ele=>{
           return (
               <Qcard ele={ele} className='grid-item'/>
               )
            })}
        </div>
    </Container>
  )
}
const Container = styled.div`

    .grid{
        
        padding:30px;
        background-color:#f0f0f0;    
        display:inline-grid;
        grid-template: 1fr 1fr/1fr 1fr 1fr ;
        justify-items: center;
        align-items:center;
        gap:40px;
    }
        `

export default Qualities