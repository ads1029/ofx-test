import React from "react";
import { Link } from "react-router-dom";

import InfoRow from "./InfoRow";
import MobileRow from "./MobileRow";
import CurrencyRow from "./CurrencyRow";

const linkStyle = {
  backgroundColor: "red",
};

export default function Quote() {
  return (
    <div className="wrapper">
      {/* <CurrencyRow id="CurrencyRow1" /> */}
      {/* <CurrencyRow id="CurrencyRow2" /> */}

      <div id="firstName" className="test">
        <p>First Name </p> <p className="required">*</p>
        <InfoRow />
      </div>
      <div id="lastName" className="test">
        <p>Last Name</p> <p className="required">*</p>
        <InfoRow />
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
        <CurrencyRow />
      </div>
      <div id="to" className="test">
        <p>to currency</p>
        <p className="required">*</p>
        <CurrencyRow />
      </div>
      <div id="amount" className="test">
        <p>Amount</p>
        <p className="required">*</p>
        <br />
        <input type="number" id="amountInput" value={fromAmount} />
      </div>
      <div id="btn">
        <Link to="/result">
          <h3 style={linkStyle}>GET QUOTE</h3>
        </Link>
      </div>
    </div>
  );
}
