import React, { useState } from "react";
import axios from "axios";

function Test() {
  const [t, setT] = useState("");
  const [a, setA] = useState("");

  function getQ() {
    axios
      .get("http://localhost:5000/tasks", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        // setT(res.data.text);
        // setA(res.data.author);
      });
  }

  return (
    <div>
      <button onClick={getQ}>BUTTON</button>
      <h1>{t}</h1>
      <h3>{"-" + a}</h3>
    </div>
  );
}

export default Test;
