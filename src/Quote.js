import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import InfoRow from "./InfoRow";
import MobileRow from "./MobileRow";
import CurrencyRow from "./CurrencyRow";
import { Context } from "./App";

const linkStyle = {
  backgroundColor: "red",
};

export default function Quote() {
  const value = useContext(Context);

  console.log(value);
  // const [fromAmount, setFromAmount] = useState(value[0]);
  // const [fromCurrency, setFromCurrency] = useState(value[1]);
  // const [toCurrency, setToCurrency] = useState(value[2]);

  const [elements, setElements] = useState(value);

  const updateOnChange = (index) => (e) => {
    // console.log("index: " + index);
    // console.log("property name: " + e.target.name);
    let newArr = [...value]; // copying the old datas array
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    console.log("Ready to update elements" + newArr);

    // ? not updating
    setElements(newArr);
  };

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
        <CurrencyRow
          // currency={fromCurrency}
          // onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          currency={elements[1]}
          onChangeCurrency={updateOnChange(1)}
        />
      </div>
      <div id="to" className="test">
        <p>to currency</p>
        <p className="required">*</p>
        <CurrencyRow
          // currency={toCurrency}
          // onChangeCurrency={(e) => setToCurrency(e.target.value)}
          currency={elements[2]}
          onChangeCurrency={updateOnChange(2)}
        />
      </div>
      <div id="amount" className="test">
        <p>Amount</p>
        <p className="required">*</p>
        <br />
        <input
          type="text"
          id="amountInput"
          // value={fromAmount}
          // onChange={(e) => setFromAmount(e.target.value)}
          value={elements[0]}
          onChange={updateOnChange(0)}
        />
      </div>
      <div id="btn">
        <Link to="/result">
          <h3 style={linkStyle}>GET QUOTE</h3>
        </Link>
      </div>
    </div>
  );
}
