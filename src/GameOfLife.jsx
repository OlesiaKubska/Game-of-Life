import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Board = styled.div`
 display: grid;
 grid-template-columns: repeat(${(props) => props.size}, 20px);
 gap: 1px;
`;

const Cell = styled.div`
 width: 20px;
 height: 20px;
 background-color: ${(props) => (props.$alive ? "blue" : "white")};
 border: 1px solid green;
`;

function GameOfLife({ size = 30 }) {
 const [board, setBoard] = useState(() => {
  return Array.from({ length: size }, () =>
   Array.from({ length: size }, () => Math.random() > 0.8)
  );
 });

 const updateBoard = useCallback(() => {
  setBoard((prev) => {
   const newBoard = prev.map((row) => [...row]);
   for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
     const alive = prev[i][j];
     let count = 0;
     // Check all eight neighbors
     for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
       if (di === 0 && dj === 0) continue; // skip the cell itself
       const ni = i + di,
        nj = j + dj;
       if (ni >= 0 && ni < size && nj >= 0 && nj < size && prev[ni][nj]) {
        count++;
       }
      }
     }
     // Apply the rules of Game of Life
     if (alive && (count < 2 || count > 3)) {
      newBoard[i][j] = false; // Dies by underpopulation or overpopulation
     } else if (!alive && count === 3) {
      newBoard[i][j] = true; // Becomes alive by reproduction
     }
     // If alive and has two or three neighbors, it survives (no change needed)
    }
   }
   return newBoard;
  });
 }, [size]);

 useEffect(() => {
  const timer = setInterval(updateBoard, 100);
  return () => clearInterval(timer);
 }, [updateBoard]);

 const toggleCell = (x, y) => {
  setBoard((b) =>
   b.map((row, ri) =>
    ri === x ? row.map((cell, ci) => (ci === y ? !cell : cell)) : row
   )
  );
 };

 return (
  <Board size={size}>
   {board.map((row, i) =>
    row.map((alive, j) => (
     <Cell key={`${i}-${j}`} $alive={alive} onClick={() => toggleCell(i, j)} />
    ))
   )}
  </Board>
 );
}

GameOfLife.propTypes = {
 size: PropTypes.number.isRequired,
};

export default GameOfLife;
