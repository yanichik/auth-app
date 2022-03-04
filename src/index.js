import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // BrowserRouter wraps around the entire app to give access to the
  // browser's URL, allowing you to manipulate it.
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
