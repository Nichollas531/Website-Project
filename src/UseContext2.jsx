import React, { useState, useEffect, useContext } from "react";
import UseContext3 from "./UseContext3";

import { UserContext } from "./UseContext";
function UseContext2() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      Component C<h2>{`Still here ${user}`}</h2>
      <UseContext3 />
    </div>
  );
}

export default UseContext2;
