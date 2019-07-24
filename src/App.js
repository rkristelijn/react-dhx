import React from "react";
import "./App.css";

import Layout from "./dhx/Layout";
import mainLayoutConfig from "./config/main-layout";

import gridConfig from "./config/grid";
import { Grid } from "dhx-suite";
//import Grid from "./dhx/Grid";

import "dhx-suite/codebase/suite.min.css";

function App() {
  const layout = mainLayoutConfig;
  // const grid = new Grid("grid_container", gridConfig);
  return (
    <Layout
      layout={layout}
      header={"HEAder"}
      sidebar={"SIDEbar"}
      content={new Grid("grid_container", gridConfig)}
      aside={"ASide"}
      footer={"FOoter"}
    />
  );
}

export default App;
