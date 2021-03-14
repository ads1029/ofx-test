import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Result from "./page/Result";
import Quote from "./page/Quote";

import CurrencyContext from "./page/CurrencyContext";

function App() {
  const [amount, setAmount] = React.useState("1000");
  const [fromCurrency, setFromCurrency] = React.useState("AUD");
  const [toCurrency, setToCurrency] = React.useState("GBP");

  const currencyValue = {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  };

  return (
    <CurrencyContext.Provider value={currencyValue}>
      <Router>
        <div className="App">
          <h1 id="quote">Quick Quote</h1>
          <Switch>
            <Route path="/" exact component={Quote}></Route>
            <Route path="/result" component={Result}></Route>
          </Switch>
        </div>
      </Router>
    </CurrencyContext.Provider>
  );
}

export default App;
