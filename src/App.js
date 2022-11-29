import React, { Fragment } from "react";
import MainPage from "./pages/MainPage";
import { Route, Switch } from "react-router-dom";
import Trips from "./pages/Trips";
import Georgia from "./pages/Georgia";
import Cars from "./pages/Cars";
import Hotels from "./pages/Hotels";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path={"/"} exact>
          <MainPage />;
        </Route>
        <Route path={"/trips"}>
          <Trips />;
        </Route>
        <Route path={"/georgia"}>
          <Georgia />;
        </Route>
        <Route path={"/cars"}>
          <Cars />;
        </Route>
        <Route path={"/hotels"}>
          <Hotels />;
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
