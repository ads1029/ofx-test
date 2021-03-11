import React from "react";

export default function CurrencyRow(props) {
  const { currency, onChangeCurrency } = props;

  const currencyOptions = ["AUD", "USD", "CNY"];

  const currencyHash = {
    AUD: "Australian Dollar",
    CNY: "Chinese Yuan",
    USD: "United States Dollar",
  };

  return (
    <div>
      {/* <input type="number" className="input" /> */}
      <select value={currency} onChange={onChangeCurrency}>
        {currencyOptions.map((e) => (
          <option value={e} key={e}>
            {currencyHash[e]} ({e})
          </option>
        ))}
      </select>
    </div>
  );
}
