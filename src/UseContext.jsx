import React, { useState, useEffect, createContext } from "react";
import UseContext1 from "./UseContext1";

export const UserContext = createContext();

function UseContext() {
  const [user, setUser] = useState("nico");

  return (
    <div className="box">
      Component A<h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <UseContext1 />
      </UserContext.Provider>
    </div>
  );
}

export default UseContext;
