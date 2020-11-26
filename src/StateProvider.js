import React, { createContext, useContext, useReducer } from "react";

// Prepare dataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the dtataLayer
export const useStateValue = () => useContext(StateContext);
