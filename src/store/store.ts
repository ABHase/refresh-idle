import { configureStore } from "@reduxjs/toolkit";
import gameReducer, { loadGameState, saveGameState } from "./gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    // Add other reducers here
  },
  preloadedState: {
    game: loadGameState(),
  },
});

store.subscribe(() => {
  saveGameState(store.getState().game);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
