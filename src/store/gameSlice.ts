import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  time: number;
  // Add other game state properties here
}

const initialState: GameState = {
  time: 0,
  // Initialize other state properties
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementTime: (state) => {
      state.time += 1;
    },
    // Add other reducers as needed
  },
});

export const { incrementTime } = gameSlice.actions;
export default gameSlice.reducer;
export const saveGameState = (state: GameState) => {
  localStorage.setItem("gameState", JSON.stringify(state));
};

export const loadGameState = (): GameState => {
  const savedState = localStorage.getItem("gameState");
  return savedState ? JSON.parse(savedState) : initialState;
};
