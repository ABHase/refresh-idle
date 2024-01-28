import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTime } from "./store/gameSlice";
import { RootState } from "./store/store";

const GameComponent = () => {
  const dispatch = useDispatch();

  const time = useSelector((state: RootState) => state.game.time);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(incrementTime());
    }, 1000); // Increment time every second

    return () => clearInterval(timer);
  }, [dispatch]);

  // Add JSX for your game component
  return <div>Game Time: {time}</div>;
};

export default GameComponent;
