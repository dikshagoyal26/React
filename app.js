import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
