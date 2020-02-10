import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const ERRORS_COUNT = 3;

ReactDOM.render(
    <App errorsCount={errorsCount} />,
    document.getElementById(`root`)
);
