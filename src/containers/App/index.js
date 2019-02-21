import React from "react";
import { Router } from "@reach/router";
import Loadable from "react-loadable";

import Spinner from "components/Spinner";
import Home from "containers/Home";
import NotFound from "containers/NotFound";

const LoadableForecast = Loadable({
  loader: () => import("containers/Forecast" /* webpackChunkName: "forecast" */),
  loading: () => <Spinner colorScheme="light" /> // eslint-disable-line
});

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Home path="/" />
          <LoadableForecast path="forecast" />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
