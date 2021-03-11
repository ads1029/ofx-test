import React from "react";

export default function CurrencyRow() {
  const currencyOptions = [
    ["AUD", "Australian Dollar"],
    ["CNY", "Chinese Yuan"],
    ["USD", "United States Dollar"],
  ];

  return (
    <div>
      {/* <input type="number" className="input" /> */}
      <select>
        {currencyOptions.map((e) => (
          <option value={e[0]} key={e[0]}>
            {e[1]} ({e[0]})
          </option>
        ))}
      </select>
    </div>
  );
}
