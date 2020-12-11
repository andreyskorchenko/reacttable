import React, { Fragment } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import SelectData from "./components/SelectData";
import Small from "./pages/Small";
import Big from "./pages/Big";
import "./index.scss";

const App = () => {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <SelectData />
          </Route>

          <Route path="/small">
            <Small />
          </Route>

          <Route path="/big">
            <Big />
          </Route>
        </Switch>
      </HashRouter>
    </Fragment>
  );
};

export default App;
