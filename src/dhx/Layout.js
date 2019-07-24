import React, { useEffect } from "react";
import { Layout } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

export default function(props) {
  useEffect(() => {
    const { layout, header, sidebar, content, aside, footer } = props;

    const _layout = new Layout("dhx_layout", layout);
    _layout.cell("toolbar").attachHTML(header);
    _layout.cell("sidebar").attachHTML(sidebar);
    typeof content == "string"
      ? _layout.cell("content").attachHTML(content)
      : _layout.cell("content").attach(content);
    // _layout.cell("content").attachHTML(JSON.stringify(props.children));
    _layout.cell("rightbar").attachHTML(aside);
    _layout.cell("footer").attachHTML(footer);
  });

  return <div id="dhx_layout" />;
}
