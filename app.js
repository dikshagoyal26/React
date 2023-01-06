import React from "react";
import ReactDOM from "react-dom/client";

// using React.createElement
const h1 = React.createElement(
  "h1",
  { className: "heading", key: 1 },
  "Heading 1"
);
const h2 = React.createElement(
  "h2",
  { className: "heading", key: 2 },
  "Heading 2"
);
const h3 = React.createElement(
  "h3",
  { className: "heading", key: 3 },
  "Heading 3"
);

const titleComponent = React.createElement("div", { className: "title" }, [h1, h2, h3]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(titleComponent);

// elements using JSX
const h1Element = (
  <h1 key={4} className="heading">
    Heading 1 Element
  </h1>
);
const h2Element = (
  <h2 key={5} className="heading">
    Heading 2 Element
  </h2>
);
const h3Element = (
  <h3 key={6} className="heading">
    Heading 3 Element
  </h3>
);

const titleElement = (
  <div className="title">
    {h1Element}
    {h2Element}
    {h3Element}
  </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(titleElement);

// Functional components
const H1 = () => (
  <h1 key={7} className="heading">
    Heading 1 Functional Component
  </h1>
);
const H2 = () => (
  <h2 key={8} className="heading">
    Heading 2 Functional Component
  </h2>
);
const H3 = () => (
  <h3 key={9} className="heading">
    Heading 3 Functional Component
  </h3>
);
const TitleComponent = () => (
  <div className="title">
    <H1 />
    {H2()}
    <H3></H3>
  </div>
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(<TitleComponent />);
