import GameOfLife from "./GameOfLife";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

function App() {
 return (
  <>
   <GlobalStyle />
   <GameOfLife size={30} />
  </>
 );
}

export default App;
