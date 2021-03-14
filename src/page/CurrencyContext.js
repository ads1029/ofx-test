import React from "react";

const currencyContext = React.createContext({
  amount: 0,
  setAmount: () => {},
  fromCurrency: 0,
  setFromCurrency: () => {},

  toCurrency: 0,
  setToCurrency: () => {},
});

export default currencyContext;
