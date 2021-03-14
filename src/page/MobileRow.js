import React from "react";

const countryList = ["+61", "+1", "+86"];

export default function MobileRow() {
  return (
    <div>
      <select name="" id="">
        {countryList.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input type="text" />
    </div>
  );
}
