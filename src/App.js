import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NerdSwap from "./components/NerdSwap";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <center className="App">
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route path="/nerd-swap">
              <NerdSwap />
            </Route>
            <Route path="">
              <Home />
            </Route>
          </Switch>
        </Router>
        <div>
          <Footer />
        </div>
      </Provider>
    </center>
  );
}

export default App;
