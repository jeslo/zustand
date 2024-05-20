import React from "react";
import useCounterStore from "../app/counterStore";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore((state) => ({
    count: state.count,
    increment: state.increment,
  }));
  return (
    <>
      <div style={{ color: "white" }}>{count}</div>
      <button
        onClick={() => {
          decrement();
        }}
        className="delete btn"
      >
        Decrement
      </button>
      <button
        onClick={() => {
          increment();
        }}
        className="delete btn"
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
