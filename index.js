import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import { TableContainer } from "./components/TableContainer";

ReactDOM.render(
	<TableContainer></TableContainer>,
	document.getElementById("app")
)