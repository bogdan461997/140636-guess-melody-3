import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const countErrors = 3;

ReactDOM.render(
    <App countErrors={countErrors} />,
    document.getElementById(`root`)
);
