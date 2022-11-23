import React from 'react'
import styled from 'styled-components';
import Imgreact from '../img/imgreact.png';
import Avt from '../img/avt.jpeg';

const Div=styled.a`
  display: flex;
  width: 300px;
  min-height: 300px;
  border-radius: 20px;
  background-color: #a2cee5;
  flex-direction: column;
  word-wrap: break-word;
  padding-bottom: 1.5vh;
  text-decoration: none;
  color: black;
  margin-top: 40px;
  margin-left: 15px;
  box-shadow: 1px 1px 1px 1px #3f9a9f;
  :hover{
    opacity: 0.85;
  }
`
const Image= styled.img`
  width: 300px;
  height: 170px;
  border-radius: 20px 20px 0 0;
`
const Imgavt=styled.img`
  width: 6vh;
  height: 6vh;
  border-radius: 50px; 
  margin-top: 10px;
  margin-left: 10px;
`

const Title=styled.p`
  /* margin: top right bottom left */
  font-size: 15px;
  font-weight: 700;
  margin:10px 0px 10px 0px 
`
const Spandetails=styled.span`
  font-size: 15px;
`

export default function Video_card() {
  return (
    <Div href="https://www.youtube.com/watch?v=2ajGlMbyc0Q" target="_blank" > 
          <nav>
              <Image src={Imgreact}></Image>
          </nav>
          <nav style={{display:"flex"}}>
              <Imgavt src={Avt}></Imgavt>
              <nav style={{display:"flex",flexDirection:"column",marginLeft:"10px"}} >
              <Title>Phim siêu nhân điện quang cuồng phong</Title>
              <Spandetails>Kênh siêu nhân</Spandetails>
              <Spandetails>3M lượt xem</Spandetails>
              <Spandetails>1 tháng trước</Spandetails>
              </nav>
          </nav>
    </Div>
  )
}
