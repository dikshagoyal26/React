const heading1 = React.createElement(
    "h1",
    { class: "heading" },
    "Heading 1"
  );
  const heading2 = React.createElement(
    "h2",
    { class: "heading" },
    "Heading 2"
  );

  const container = React.createElement("div", { class: "container" }, [
    heading1,
    heading2,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);