import React from "react";
import ReactDOM from "react-dom/client";

const rem = <span>React Element</span>;

const title = (
  <h1 className="head" tabIndex="5">
    {rem}
    This is heading 1 in jsx 🚀
  </h1>
);
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heasiding">Namaste react 2</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
