import React, { useEffect } from "react";
import { Layout } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

export default function(props) {
  useEffect(() => {
    const { layout } = props;
    new Layout("layout_container", layout);
  });

  return <div id="layout_container" />;
}
