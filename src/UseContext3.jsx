import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "./UseContext";

function UseContext3() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      Component D<h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default UseContext3;
