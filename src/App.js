import { Menu } from "./components/Menu";
import styled, { css } from 'styled-components';
import Navbar from "./components/Navbar";
import './App.css';
import Video_suggestions from "./components/Video_suggestions";
import Video_list from "./components/Video_list";
const Container=styled.div`
display: flex;
min-height: 100vh;
`
const Main=styled.div`
flex:10;
`
function App() {
  return (
// Youtube có 2 phần gồm thanh menu bên trái và phần main bên phải
<Container>
    <Menu ></Menu>
    <Main >
      <Navbar></Navbar>
      <Video_suggestions></Video_suggestions>
      <Video_list></Video_list>
    </Main>
</Container>
  );
}

export default App;
