import React from "react";
import ReactDOM from "react-dom/client";

// App Import
import App from "./App";

// CSS Imports
import "./styles/title.css";
import "./styles/general.css";
import "./styles/input.css";
import "./styles/display.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
