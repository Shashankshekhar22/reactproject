import React from "react";
import ReactDOM from "react-dom/client";

// React element
const jsxTutorial = <h1 id="heading"> Namaste React Tutorial using JSX 🚀</h1>;
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
const Title = () => {
  return <h2>This is title</h2>;
};
const number = 10000;
// React functional component
const HeaderComponent = () => (
  <div id="container">
    {number}
    <h1>Header from functional component</h1>
    <Title />
  </div>
);

const HeaderComponent2 = () => {
  return <h1 className="something">Header Component</h1>;
};

// rootElement.render(heading);
rootElement.render(<HeaderComponent />);
