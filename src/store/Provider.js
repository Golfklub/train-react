import React, { createContext, useState } from "react";

export const GetUserApiFunc = createContext({});

export const Provider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <GetUserApiFunc.Provider value={{ list, setList }}>
      {children}
    </GetUserApiFunc.Provider>
  );
};
