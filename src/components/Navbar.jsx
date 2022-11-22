import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './StyleComponents.css';
const Container=styled.div`
display: flex;
justify-content: center;
`
const Input=styled.input`
margin-top: 2vh;
border-radius: 3vh;
width: 70vh;
height: 4vh;
padding-left: 2vh;

`
export default function Navbar() {
  return (
    <Container>
      <Input placeholder='Tìm kiếm' ></Input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_search" ></FontAwesomeIcon>
    </Container>
  )
}
