import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const base_url_prefix =
  "https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/";
const base_url_suffix = "?format=json";

var rate = "0.5";
var toAmount = "5000";

async function convert(from, to, fromAmount) {
  const fin = base_url_prefix + `${to}/${from}/${fromAmount}` + base_url_suffix;

  let res = await fetch(fin);
  res = await res.json();
  let rate = res.CustomerRate;
  let toAmount = res.CustomerAmount;
  // console.log(res);
  console.log(rate);
  console.log(toAmount);
}

export default function Result(props) {
  const linkStyle = {
    backgroundColor: "red",
  };

  const { fromCurrency, toCurrency, fromAmount } = props;

  // todo useEffect to fetch API (or not?)
  // useEffect(() => {
  //   // todo check if from = to
  //   convert({ fromCurrency }, { toCurrency }, { fromAmount });
  // }, []);

  // const test =
  //   "https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/CNY/10000?format=json";

  return (
    <div>
      <h1>OFX Customer Rate</h1>
      <h1>0.888 {rate}</h1>

      <h3>From</h3>
      <h2>
        {fromCurrency}fromAmount: {fromAmount}
      </h2>
      <h3>To</h3>
      <h2>
        {toCurrency} toAmount: {toAmount}
      </h2>

      <Link to="/">
        <div>
          <h2 style={linkStyle}>Start New Quote</h2>
        </div>
      </Link>
    </div>
  );
}
