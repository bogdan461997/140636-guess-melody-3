import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const errorsCount = 3;

ReactDOM.render(
    <App errorsCount={errorsCount} />,
    document.getElementById(`root`)
);
