import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [msg, setMsg] = useState("");

  async function checkPal(val) {
    // find the length of a string
    console.log(val);
    const len = val.length;
    const input = val.target.value;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
      // check if first and last string are same
      if (input[i] !== val[len - 1 - i]) {
        // return "It is not a palindrome";
        // console.warn(val.targe)
        console.log("Not Palindrome");
      }
    }
    console.log("Palindrome");
  }
  return (
    <div className="main">
      <input
        type="text"
        name="anyName"
        value={msg}
        onChange={(value) => setMsg(target.value)}
      />
      <div className="msgBox"></div>
      <div className="btn-group">
        <button className="btn">Check</button>
      </div>
    </div>
  );
};

export default Main;
