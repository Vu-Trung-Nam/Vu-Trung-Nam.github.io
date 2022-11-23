import React from 'react'
import styled from 'styled-components';
import logo from "../img/logoyou.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faBook,faCloud,faClock,faThumbsUp,faMoon} from '@fortawesome/free-solid-svg-icons';
import '../_index.scss';
const Container=styled.div`
background-color: ${({theme}) =>theme.bg };
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
width: 15%;
height: 100%;
top:0;
left: 0;
z-index: 10;
`

const Img=styled.img`
width: 50%;
height: 8%;
cursor: pointer;
margin-top: 20px;
`

const Button=styled.button`
margin-bottom: 3vh;
border: none;
cursor: pointer;
border-radius: 17px;
text-align: left;
padding-left: 3vh;
margin-top: 15px;
min-width: 70%;
min-height: 40px;
background-color: #5188ca;
color: white;
font-size: 15px;
box-shadow: 1px 1px 1px 1px #3270bd;
:hover{
  opacity: 0.85;
}
`





export const Menu = ( {lightMode,setLightMode} ) => {
  return (
    <Container>
      <Img src={logo}></Img>
      <Button style={{marginTop:"50px"}} ><FontAwesomeIcon icon={faHouse} ></FontAwesomeIcon> Trang chủ</Button>
      <Button><FontAwesomeIcon icon={faBook} ></FontAwesomeIcon> Thư viện</Button>
      <Button><FontAwesomeIcon icon={faCloud} ></FontAwesomeIcon> Đăng kí</Button>
      <Button><FontAwesomeIcon icon={faClock} ></FontAwesomeIcon> Xem sau</Button>
      <Button><FontAwesomeIcon icon={faThumbsUp} ></FontAwesomeIcon> Video đã thích</Button>
      <Button onClick={()=>setLightMode(!lightMode)} ><FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon> Dark mode</Button>
    </Container>
  )
}
