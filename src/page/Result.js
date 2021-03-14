import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyContext from "./CurrencyContext";
import getExchange from "../api/getExchange";

export default function Result() {
  const { amount, fromCurrency, toCurrency } = useContext(CurrencyContext);

  const result = getExchange(fromCurrency, toCurrency, amount);

  const [rate, setRate] = useState("0");
  const [toAmount, setToAmount] = useState("0");

  //
  result.then((obj) => {
    setRate(obj.rate);
    setToAmount(obj.toAmount);
  });
  // todo useEffect to fetch API (or not?)
  // useEffect(() => {
  //   // todo check if from = to
  //   convert(fromCurrency, toCurrency, fromAmount);
  // }, []);

  return (
    <div>
      <div className="result">
        <h1>OFX Customer Rate</h1>
        <h1 className="resultRate">{rate}</h1>

        <h3>From</h3>
        <p className="resultCurrency">{fromCurrency} </p>
        <p className="resultAmount">{amount} </p>

        <h3>To</h3>
        <p className="resultCurrency">{toCurrency}</p>
        <p className="resultAmount">{toAmount}</p>
      </div>

      <div className="btn">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4>Start New Quote</h4>
        </Link>
      </div>
    </div>
  );
}
