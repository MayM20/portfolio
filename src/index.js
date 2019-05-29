import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css"; /*new added */
import * as serviceWorker from "./serviceWorker"; /*what is this */

ReactDOM.render(<App />, document.getElementById("Maylen|Portfolio"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
