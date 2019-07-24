export default {
  css: "dhx_layout_container dhx_layout-cell--bordered",
  rows: [
    {
      id: "toolbar",
      html: "Header",
      css: "dhx_layout_row--top dhx_layout-cell--border_bottom",
      gravity: false,
      height: "60px"
    },
    {
      css: "dhx_layout_row--middle",
      cols: [
        {
          id: "sidebar",
          html: "Sidebar",
          gravity: false,
          css: "dhx_layout_row--middle--left dhx_layout-cell--border_right",
          width: "200px"
        },
        {
          rows: [
            {
              id: "content",
              css: "dhx_layout_row--middle--middle",
              html: "Content"
            }
          ]
        },
        {
          id: "rightbar",
          html: "Aside",
          gravity: false,
          css: "dhx_layout_row--middle--right dhx_layout-cell--border_left",
          width: "200px"
        }
      ]
    },
    {
      id: "footer",
      html: "Footer",
      css: "dhx_layout_row--bottom dhx_layout-cell--border_top",
      gravity: false,
      height: "60px"
    }
  ]
};
