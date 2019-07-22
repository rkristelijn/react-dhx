import React, { useEffect } from "react";
import { Grid } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

export default function(props) {
  useEffect(() => {
    const { config } = props;
    new Grid("grid_container", config);
  });

  return <div id="grid_container" />;
}
