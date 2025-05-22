import React, { useState, useEffect } from "react";

function ComponnentUseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("color");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count]);
  function handleAddChange() {
    setCount((c) => c + 1);
  }
  function handleMinusChange() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <div style={{ color: color }}>
      Count: {count}
      <button onClick={handleAddChange}>Add</button>
      <button onClick={handleMinusChange}>Minus</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

function SecondComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [heigh, setHeigh] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //console.log("hey there");
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setHeigh(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window heigh: {heigh}px</p>
    </>
  );
}

//export default ComponnentUseEffect;
export default SecondComponent;
