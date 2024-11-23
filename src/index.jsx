import App from "./App.jsx";
import MyReact from "./React";

const container = document.getElementById("root");

/* @jsx MyReact.createElement */
MyReact.render(<App hello={"hi"}/>, container);