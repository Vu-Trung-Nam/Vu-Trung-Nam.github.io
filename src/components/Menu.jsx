import React from 'react'
import styled from 'styled-components';
import logo from "../img/logoyou.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faBook,faCloud,faClock,faThumbsUp,faMoon} from '@fortawesome/free-solid-svg-icons';
const Container=styled.div`
flex: 1;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
`
const Img=styled.img`
width: 30vh;
height: 15vh;
cursor: pointer;
`
const Button=styled.button`
height: 5vh;
margin-bottom: 3vh;
border: none;
cursor: pointer;
border-radius: 1vh;
width: 25vh;

`



export const Menu = () => {
  return (
    <Container>
      <Img src={logo}></Img>
      <Button ><FontAwesomeIcon icon={faHouse} ></FontAwesomeIcon> Trang chủ</Button>
      <Button><FontAwesomeIcon icon={faBook} ></FontAwesomeIcon> Thư viện</Button>
      <Button><FontAwesomeIcon icon={faCloud} ></FontAwesomeIcon> Kênh đăng kí</Button>
      <Button><FontAwesomeIcon icon={faClock} ></FontAwesomeIcon> Xem sau</Button>
      <Button><FontAwesomeIcon icon={faThumbsUp} ></FontAwesomeIcon> Video đã thích</Button>
      <Button><FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon> Dark mode</Button>
    </Container>
  )
}
