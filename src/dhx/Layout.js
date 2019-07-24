import React, { useEffect } from "react";
import { Layout } from "dhx-suite";
// import { Grid } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

export default function(props) {
  useEffect(() => {
    const { layout } = props;
    // const grid = new Grid("grid_container", {
    //   columns: [
    //     { width: 100, id: "a", header: [{ text: "#" }] },
    //     { width: 100, id: "b", header: [{ text: "Title" }] },
    //     { width: 200, id: "c", header: [{ text: "Name" }] },
    //     { width: 300, id: "d", header: [{ text: "Address" }] }
    //   ],
    //   headerRowHeight: 50,
    //   data: [
    //     {
    //       id: 0,
    //       a: 1,
    //       b: "Linwood Long long long",
    //       c: "Petersen",
    //       d: "Dahlgreen Place"
    //     },
    //     {
    //       id: 1,
    //       a: 2,
    //       b: "Edenburg",
    //       c: "Agnes",
    //       d: "Gem Street"
    //     },
    //     {
    //       id: 2,
    //       a: 3,
    //       b: "Edenburg",
    //       c: "Agnes",
    //       d: "Gem Street"
    //     }
    //   ]
    // });
    // console.log(grid);
    // let _layout = new Layout("layout_container", layout);
    new Layout("dhx_layout", layout);
    // _layout.cell("main").attachHTML('<div id="grid_container" />');
  });

  return <div id="dhx_layout" />;
}
