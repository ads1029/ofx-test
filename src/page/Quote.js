import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import InfoRow from "./InfoRow";
import MobileRow from "./MobileRow";
import CurrencyRow from "./CurrencyRow";
import CurrencyContext from "./CurrencyContext";

function Quote({ history }) {
  const CurrencyValue = useContext(CurrencyContext);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

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
    } else if (fromCurrency === toCurrency) {
      alert("Please select different currency");
    } else if (amount * 1 <= 0) {
      alert("Please input the correct amount");
    } else {
      history.push("/result");
    }
  };

  return (
    <div className="wrapper">
      <div id="firstName" className="title">
        <p>First Name </p> <p className="required">*</p>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
      </div>
      <div id="lastName" className="title">
        <p className="title">Last Name</p> <p className="required">*</p>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div id="email" className="title">
        <p>email</p>
        <InfoRow />
      </div>
      <div id="phone" className="title">
        <p>Phone</p>
        <MobileRow />
      </div>
      <div id="from" className="title">
        <p>from currency</p>
        <p className="required">*</p>

        <CurrencyRow
          currency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
      </div>
      <div id="to" className="title">
        <p className="title">to currency</p>
        <p className="required">*</p>
        <CurrencyRow
          currency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </div>
      <div id="amount" className="title">
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
        <h4>GET QUOTE</h4>
      </div>
    </div>
  );
}

export default withRouter(Quote);
