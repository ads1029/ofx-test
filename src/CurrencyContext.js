import React, { useContext, useState } from "react";

const CurrencyContext = React.createContext();
const CurrencyUpdateContext = React.createContext();

export function useCurrency() {
  return useContext(CurrencyContext);
}

export function useCurrencyUpdate() {
  return useContext(CurrencyUpdateContext);
}

// export default function CurrencyContext() {
//   return <div></div>;
// }
