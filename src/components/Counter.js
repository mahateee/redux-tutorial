import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/actions/type";
import {
  decrementAction,
  decrementByValueAction,
  incrementAction,
  incrementByValueAction,
} from "../redux/actions/counterActions";
export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    incrementAction(dispatch);
  };
  const handleDecrement = () => {
    decrementAction(dispatch);
  };
  const handleIncrementByValue = (value) => {
    incrementByValueAction(value, dispatch);
  };
  const handleDecrementByValue = (value) => {
    dispatch(decrementByValueAction(value));
  };
  return (
    <div>
      Counter
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={() => handleIncrementByValue(3)}>
        increment By value
      </button>
      <button onClick={() => handleDecrementByValue(2)}>
        decrement By value
      </button>
    </div>
  );
}
