import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
margin-top: 3vh;
display: flex;
justify-content: center;
`
const Button=styled.button`
width: 15vh;
height: 5vh;
border-radius: 1vh;
border: none;
background-color: #f2f2f2;
margin-left: 5vh;

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
