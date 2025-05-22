// Thi is just like useState() but without rerendering the component
// everytime thre is a change
import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  // let [number, setNumber] = useState(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  });
  function handleClick() {
    //    setNumber((n) => n + 1);
    //ref.current = ref.current + 1;
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow ";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick1() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow ";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow ";
  }
  return (
    <div>
      <button onClick={handleClick}>click me!</button>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick1}>click me!</button>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick2}>click me!</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default UseRef;
