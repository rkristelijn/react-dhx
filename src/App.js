import React from "react";
import "./App.css";

import Layout from "./dhx/Layout";
import mainLayoutConfig from "./config/main-layout";
import "dhx-suite/codebase/suite.min.css";

// import Grid from "./dhx/Grid";

function App() {
  const layout = mainLayoutConfig;

  return (
    <Layout
      layout={layout}
      header={"HEAder"}
      sidebar={"SIDEbar"}
      content={"COntent"}
      aside={"ASide"}
      footer={"FOoter"}
    />
  );
}

export default App;
