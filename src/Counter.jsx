import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const decrease = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-countatiner">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={increment}>
        increment
      </button>
      <button className="counter-button" onClick={decrease}>
        Decrease
      </button>
      <button className="counter-button" onClick={reset}>
        reset
      </button>
    </div>
  );
}
export default Counter;
