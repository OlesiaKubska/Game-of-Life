import { useEffect, useCallback, useReducer, useState } from "react";
import PropTypes from "prop-types";
import {
 Container,
 Title,
 Board,
 Cell,
 ButtonContainer,
 Button,
} from "./GameOfLife.styled";
import { gameOfLifeReducer } from "./gameOfLifeReducer";

function GameOfLife({ size = 30 }) {
 const [board, dispatch] = useReducer(
  gameOfLifeReducer,
  Array.from({ length: size }, () =>
   Array.from({ length: size }, () => Math.random() > 0.8)
  )
 );
 const [running, setRunning] = useState(false);
 const [intervalId, setIntervalId] = useState(null);

 const updateBoard = useCallback(() => {
  dispatch({ type: "UPDATE_BOARD" });
 }, []);

 const startGame = () => {
  setRunning(true);
  const id = setInterval(updateBoard, 200);
  setIntervalId(id);
 };

 const stopGame = () => {
  setRunning(false);
  if (intervalId) {
   clearInterval(intervalId);
   setIntervalId(null);
  }
 };

 const clearBoard = () => {
  stopGame();
  dispatch({ type: "CLEAR_BOARD" });
 };

 useEffect(() => {
  return () => {
   if (intervalId) {
    clearInterval(intervalId);
   }
  };
 }, [intervalId]);

 const toggleCell = (x, y) => {
  dispatch({ type: "TOGGLE_CELL", payload: { x, y } });
 };

 return (
  <Container>
   <Title>Game of Life</Title>
   <Board size={size}>
    {board.map((row, i) =>
     row.map((alive, j) => (
      <Cell key={`${i}-${j}`} $alive={alive} onClick={() => toggleCell(i, j)}>
       {alive ? "★" : "★"}
      </Cell>
     ))
    )}
   </Board>
   <ButtonContainer>
    <Button onClick={startGame} disabled={running}>
     Start
    </Button>
    <Button onClick={stopGame} disabled={!running}>
     Stop
    </Button>
    <Button onClick={clearBoard}>Clear</Button>
   </ButtonContainer>
  </Container>
 );
}

GameOfLife.propTypes = {
 size: PropTypes.number.isRequired,
};

export default GameOfLife;
