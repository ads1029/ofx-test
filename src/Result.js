import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./App";

var rate;
var toAmount;
async function convert(from, to, fromAmount) {
  const url = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${from}/${to}/${fromAmount}?format=json`;

  console.log(url);
  let res = await fetch(url);
  console.log(res);
  res = await res.json();

  rate = res.CustomerRate;
  toAmount = res.CustomerAmount;
  // console.log(res);
  console.log("the rate is:", rate);
  console.log(toAmount);
}

export default function Result() {
  // const value = useContext(Context);

  // console.log("result of value: ", value);
  // const fromAmount = value[0];
  // const fromCurrency = value[1];
  // const toCurrency = value[2];

  const linkStyle = {
    backgroundColor: "red",
  };

  // todo useEffect to fetch API (or not?)
  // useEffect(() => {
  //   // todo check if from = to
  //   convert(fromCurrency, toCurrency, fromAmount);
  // }, []);

  return (
    <div>
      <h1>OFX Customer Rate</h1>
      <h1>{rate}</h1>

      <h3>From</h3>
      <h2>{/* {fromCurrency} {fromAmount} */}</h2>
      <h3>To</h3>
      <h2>{/* {toCurrency} {toAmount} */}</h2>

      <Link to="/">
        <div>
          <h2 style={linkStyle}>Start New Quote</h2>
        </div>
      </Link>
    </div>
  );
}
