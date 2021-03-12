import React, { useContext, useState } from "react";

const Context = React.createContext();
const CurrencyUpdateContext = React.createContext();

// customer hooks for accessing value
export function useCurrency() {
  return useContext(Context);
}

// customer hooks for accessing value
export function useCurrencyUpdate() {
  return useContext(CurrencyUpdateContext);
}

export function CurrencyContext(props) {
  const [inputs, setInputs] = useState(["AUD", "USD", "10000"]);
  return (
    <Context.Provider value={inputs}>
      <CurrencyUpdateContext value={setInputs}>{props}</CurrencyUpdateContext>
    </Context.Provider>
  );
}
