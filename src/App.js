import React from "react";
import "./App.css";

import Layout from "./dhx/Layout";

function App() {
  // console.log(Layout);
  var layout = {
    cols: [
      { header: "Column 1" },
      {
        header: "Column 2",
        cols: [
          { header: "Left cols" },
          {
            header: "Center cols",
            cols: [
              { header: "Sub Block Header cols 1" },
              { header: "Sub Block Header cols 2" },
              { header: "Sub Block Header cols 3" }
            ]
          }
        ]
      }
    ]
  };
  return <Layout layout={layout} />;
}

export default App;
