import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PWAPrompt from "react-ios-pwa-prompt";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);