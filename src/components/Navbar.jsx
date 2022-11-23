import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons';
import Avt from '../img/avt.jpeg';


const Container=styled.div`
display: flex;
justify-content: space-between;
position: fixed;
background-color: ${({theme}) =>theme.bg };
top: 0;
right: 0;
width: 85%;
padding: 15px 0px 15px 0px;
z-index: 10;
`
const Input=styled.input`
border-top-left-radius: 50px;
border-bottom-left-radius: 50px;
padding-left: 10px;
width: 40%;
border-right: none;
margin-left: 30%;
`
const Imgavt=styled.img`
  width: 5.5vh;
  height: 5.5vh;
  border-radius: 50px;

`
const Button=styled.button`
min-width: 6%;
border-top-right-radius:20px ;
border-bottom-right-radius:20px ;
cursor: pointer;
:hover{
  opacity: 0.8;
}
`
export default function Navbar() {
  return (
    <Container >
      <nav style={{display: "flex",width: "100%"}}>
        <Input placeholder='Tìm kiếm'  ></Input>
        <Button><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"100%"}} ></FontAwesomeIcon></Button>
      </nav>
      <nav style={{display:"flex",alignItems:"center",marginRight:"40px"}}>
        <FontAwesomeIcon icon={faBell} style={{fontSize:"25px",marginRight:"20px",color:"white"}} ></FontAwesomeIcon>
        <Imgavt src={Avt}></Imgavt>
      </nav>
    </Container>
  )
}
