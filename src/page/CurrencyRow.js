import React from "react";

export default function CurrencyRow(props) {
  const { currency, onChangeCurrency } = props;

  const currencyOptions = ["AUD", "USD", "GBP", "EUR", "CAD", "JPY"];

  const currencyHash = {
    AUD: "Australian Dollar",
    GBP: "British Pound",
    USD: "United States Dollar",
    JPY: "Japanese Yen",
    CAD: "Canadian Dollar",
    EUR: "Euro",
  };

  return (
    <div>
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
