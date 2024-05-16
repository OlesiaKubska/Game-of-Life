import GameOfLife from "./components/GameOfLife";
import { GlobalStyle } from "./App.styled";

function App() {
 return (
  <>
   <GlobalStyle />
   <GameOfLife size={30} />
  </>
 );
}

export default App;
