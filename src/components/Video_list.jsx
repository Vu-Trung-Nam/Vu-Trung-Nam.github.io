import React from 'react'
import styled from 'styled-components';
import Video_card from './Video_card';
const Container=styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  padding-bottom:20px;
`

export default function Video_list() {
  return (
    <Container>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
      <Video_card></Video_card>
 
    </Container>
  )
}
