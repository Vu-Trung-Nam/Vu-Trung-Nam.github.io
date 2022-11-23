import { Menu } from "./components/Menu";
import styled, {  ThemeProvider } from 'styled-components';
import Navbar from "./components/Navbar";
import Video_suggestions from "./components/Video_suggestions";
import Video_list from "./components/Video_list";
import {darkTheme, lightTheme} from "./utils/Theme"
import { useState } from "react";
const Container=styled.div`
width: 100%;
height: 100%;
background-color: #f5f5f5;
`
const Main=styled.div`
width: 85%;
float: right;
min-height: 100%;
`
const Containervideo=styled.div``



function App() {
  const [lightMode,setLightMode]=useState(true)
  return (
// Youtube có 2 phần gồm thanh menu bên trái và phần main bên phải
<ThemeProvider theme={lightMode ? lightTheme : darkTheme }>
<Container>
    <Menu lightMode={lightMode} setLightMode={setLightMode} ></Menu>
    <Main >
        <Navbar></Navbar>
        <Containervideo>
            <Video_suggestions></Video_suggestions>
            <Video_list></Video_list>
        </Containervideo>
    </Main>
</Container>
</ThemeProvider>
  );
}

export default App;
