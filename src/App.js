import React from "react";
import { Layout } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "./App.css";

function App() {
  console.log(Layout);
  var layout = new Layout("layout_container", {
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
  });
  return <div id="layout_container" />;
}

export default App;
