import React from "react";
import "./App.css";

import Layout from "./dhx/Layout";
// import Grid from "./dhx/Grid";

function App() {
  var layout = {
    rows: [
      {
        id: "menu",
        html: "top menu"
      },
      { header: "Main", height: "500px", cols: [{ id: "main" }] }
    ]
  };
  //   rows: [
  //     {
  //       css: "fe-grid-width",
  //       cols: [
  //         {
  //           width: "245px",
  //           css: "dhx_layout-cell--border_right ",
  //           gravity: !1,
  //           rows: [
  //             {
  //               css: "fe-side-bar_logo",
  //               html:
  //                 '<div class="fe-side-bar_block fe-side-bar_block--text_center">' +
  //                 "idk" + //f.logo +
  //                 "</div>",
  //               gravity: !1
  //             },
  //             {
  //               css: "fe-side-bar_block fe-side-bar_block--add",
  //               id: "addfile",
  //               gravity: !1,
  //               on: {
  //                 click: function(t) {
  //                   console.log(t);
  //                   // return e.events.fire(u.FileExplorerEvents.showAddPopup, [
  //                   //   t,
  //                   //   e._currentRoot,
  //                   //   e._currentPath
  //                   // ]);
  //                 }
  //               }
  //             },
  //             {
  //               id: "tree",
  //               css: "fe-side-bar_block fe-side-bar_block--no_p",
  //               gravity: !1
  //             },
  //             {
  //               id: "spacer"
  //             },
  //             {
  //               id: "emptySpace",
  //               css: "",
  //               html: (function(t, e) {
  //                 console.log(t, e);
  //                 return;
  //                 // return (
  //                 //   '\n\t\t<div class="fe-space">\n\t\t\t<div class="fe-space__total" style="width: 100%;">\n\t\t\t\t<div class="fe-space__occupied" style="width: ' +
  //                 //   ((e - t) / e) * 100 +
  //                 //   '%"></div>\n\t\t\t</div>\n\t\t\t<span class="fe-space__text">Empty ' +
  //                 //   v.getBasis(t) +
  //                 //   " from " +
  //                 //   v.getBasis(e) +
  //                 //   "</span>\n\t\t</div>\n\t"
  //                 // );
  //               })(170724950016, 1099511627776),
  //               gravity: !1
  //             }
  //           ]
  //         },
  //         {
  //           css: "dhx_layout-cell--gravity",
  //           rows: [
  //             {
  //               id: "toolbar",
  //               gravity: !1
  //             },
  //             {
  //               cols: [
  //                 {
  //                   css: "dhx_widget--bg_gray",
  //                   rows: [
  //                     {
  //                       id: "content",
  //                       css: " fe-content"
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   id: "tabbar",
  //                   hidden: !0,
  //                   width: "350px",
  //                   gravity: !1,
  //                   css: "dhx_layout-cell--border_left"
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       id: "footer",
  //       css: "fe-footer",
  //       gravity: !1,
  //       html: "idk"
  //     }
  //   ]
  // };
  //   rows: [
  //     {
  //       cols: [
  //         {
  //           header: "Title",
  //           width: "40%"
  //         },
  //         {
  //           header: "Some buttons",
  //           width: "60%"
  //         }
  //       ]
  //     },
  //     {
  //       rows: [
  //         {
  //           height: "900px",
  //           cols: [
  //             {
  //               header: "Main menu"
  //               // collapsable: true,
  //               // collapsed: true,
  //               // resizable: true
  //             },
  //             { header: "Main", height: "900px", width: "900px", }
  //           ]
  //         },
  //         {
  //           header: "Statusbar",
  //           height: "10px"
  //         }
  //       ]
  //     }
  //   ]
  // };
  return <Layout layout={layout} />;
}

export default App;
