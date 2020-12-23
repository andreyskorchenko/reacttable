import React, { Fragment } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import SelectData from "./components/SelectData";
import Viewtable from "./pages/Viewtable";
import "./index.scss";

const App = () => {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <SelectData />
          </Route>

          <Route path="/viewtable">
            <Viewtable />
          </Route>
        </Switch>
      </HashRouter>
    </Fragment>
  );
};

export default App;
