import React, { Fragment } from "react";
import MainPage from "./pages/MainPage";
import { Route } from "react-router-dom";
import Trips from "./pages/Trips";

const App = () => {
  return (
    <Fragment>
      <Route path={'/'}>
         <MainPage />;
      </Route>
      <Route path={'/trips'}>
         <Trips />;
      </Route>
    </Fragment>

  )

};

export default App;
