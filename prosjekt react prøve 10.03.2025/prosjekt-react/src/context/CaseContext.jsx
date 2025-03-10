import React, { createContext, useState } from "react";

export const CaseContext = createContext();

export const CaseProvider = ({ children }) => {
  const [cases, setCases] = useState([]);

  const addCase = (newCase) => {
    setCases([...cases, newCase]);
  };

  return (
    <CaseContext.Provider value={{ cases, addCase }}>
      {children}
    </CaseContext.Provider>
  );
};
