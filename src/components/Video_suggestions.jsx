import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
display: flex;
justify-content: center;
margin-top: 80px;
width: 100%;
height: 100%;
`
const Button=styled.button`
min-width: 8vw;
min-height: 40px;
border-radius: 17px;
border: none;
background-color: #5188ca;
color: white;
font-size: 15px;
cursor: pointer;
margin-left: 4vw;
box-shadow: 1px 1px 1px #0e2e56;
:hover{
  opacity: 0.7;
}
`
export default function video_suggestions() {
  return (
    <Container>
        <Button>Ca nhạc</Button> 
        <Button>Hoạt hình</Button> 
        <Button>Nhảy múa</Button> 
        <Button>Gấu bông</Button> 
        <Button>Mẹ và bé</Button> 
        <Button>Siêu nhân</Button> 
    </Container>
  )
}
