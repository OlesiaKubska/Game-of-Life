export const gameOfLifeReducer = (state, action) => {
 switch (action.type) {
  case "TOGGLE_CELL": {
   const { x, y } = action.payload;
   return state.map((row, ri) =>
    ri === x ? row.map((cell, ci) => (ci === y ? !cell : cell)) : row
   );
  }

  case "UPDATE_BOARD": {
   const size = state.length;
   const newBoard = state.map((row) => [...row]);
   for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
     const alive = state[i][j];
     let count = 0;
     for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
       if (di === 0 && dj === 0) continue;
       const ni = i + di,
        nj = j + dj;
       if (ni >= 0 && ni < size && nj >= 0 && nj < size && state[ni][nj]) {
        count++;
       }
      }
     }
     if (alive && (count < 2 || count > 3)) {
      newBoard[i][j] = false;
     } else if (!alive && count === 3) {
      newBoard[i][j] = true;
     }
    }
   }
   return newBoard;
  }

  case "CLEAR_BOARD": {
   const size = state.length;
   return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Math.random() > 0.8)
   );
  }

  default:
   return state;
 }
};
