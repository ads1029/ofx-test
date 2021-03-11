import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Result from "./Result";
import Quote from "./Quote";

// ! Adding context
export const Context = React.createContext();
function App() {
  // const [fromAmount, setFromAmount] = useState("10000");

  // let fromAmount = "100000";
  // let fromCurrency = "AUD";
  // let toCurrency = "USD";

  return (
    <Router>
      <div className="App">
        <Context.Provider value={["10000", "AUD", "USD"]}>
          <h1 id="quote">Quick Quote</h1>
          <Switch>
            <Route path="/" exact>
              <Quote
              // fromAmount={fromAmount}
              // fromCurrency={fromCurrency}
              // toCurrency={toCurrency}
              />
            </Route>
            <Route path="/result">
              <Result
              // fromAmount={fromAmount}
              // fromCurrency={fromCurrency}
              // toCurrency={toCurrency}
              />
            </Route>
          </Switch>
        </Context.Provider>
      </div>
    </Router>
  );
}

export default App;
