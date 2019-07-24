import React, { useState } from "react";
import "./App.css";

import Layout from "./dhx/Layout";
import mainLayoutConfig from "./config/main-layout";

import gridConfig from "./config/grid";
import { Grid } from "dhx-suite";
//import Grid from "./dhx/Grid";

import "dhx-suite/codebase/suite.min.css";

function App() {
  const [grid, setGrid] = useState();
  const layout = mainLayoutConfig;

  return (
    <>
      <button onClick={() => setGrid(new Grid("grid_container", gridConfig))}>
        Click me
      </button>
      <Layout
        layout={layout}
        header={"HEAder"}
        sidebar={"SIDEbar"}
        content={'<div id="grid_container" />'}
        aside={"ASide"}
        footer={"FOoter"}
      />
    </>
  );
}

export default App;
