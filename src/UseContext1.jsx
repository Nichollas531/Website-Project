import React, { useState, useEffect, useContext } from "react";
import UseContext2 from "./UseContext2";

function UseContext1() {
  return (
    <div className="box">
      Component B
      <UseContext2 />
    </div>
  );
}

export default UseContext1;
