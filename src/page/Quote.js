import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import InfoRow from "./InfoRow";
import MobileRow from "./MobileRow";
import CurrencyRow from "./CurrencyRow";
import CurrencyContext from "./CurrencyContext";

function Quote() {
  const CurrencyValue = useContext(CurrencyContext);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  // console.log(CurrencyValue);
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  } = CurrencyValue;

  const checkValidation = () => {
    if (!firstName) {
      alert("Please input first name");
    } else if (!lastName) {
      alert("Please input last name");
    } else {
      alert("Pass!");
      // history.push("/result")
    }
  };

  return (
    <div className="wrapper">
      <div id="firstName" className="test">
        <p>First Name </p> <p className="required">*</p>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            // onChange={}
          />
        </div>
      </div>
      <div id="lastName" className="test">
        <p>Last Name</p> <p className="required">*</p>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div id="email" className="test">
        <p>email</p>
        <InfoRow />
      </div>
      <div id="phone" className="test">
        <p>Phone</p>
        <MobileRow />
      </div>
      <div id="from" className="test">
        <p>from currency</p>
        <p className="required">*</p>

        <CurrencyRow
          // currency={fromCurrency}
          // onChangeCurrency={(e) =}
          currency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
      </div>
      <div id="to" className="test">
        <p>to currency</p>
        <p className="required">*</p>
        <CurrencyRow
          // currency={toCurrency}
          // onChangeCurrency={(e) => setToCurrency(e.target.value)}
          currency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </div>
      <div id="amount" className="test">
        <p>Amount</p>
        <p className="required">*</p>
        <br />
        <input
          type="text"
          id="amountInput"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div id="btn" className="btn" onClick={checkValidation}>
        <Link to="/result" style={{ textDecoration: "none" }}>
          <h4>GET QUOTE</h4>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Quote);
