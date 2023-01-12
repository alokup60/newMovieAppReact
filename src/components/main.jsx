import React, { useState } from "react";
import "./main.css";

const Main = () => {
  //   let num = 1;
  const [counter, setCounter] = useState(1);
  function inc() {
    counter >= 0 ? setCounter(counter + 1) : setCounter(counter);
    // setCounter(counter + 1);
  }
  function dec() {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter);
    // setCounter(counter - 1);
  }
  return (
    <div className="counter">
      <h1 className="head" style={{ color: "black" }}>
        {counter}
      </h1>
      <div className="btn-group">
        <button className="btn" onClick={inc}>
          Increment
        </button>
        <button className="btn" onClick={dec}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Main;
