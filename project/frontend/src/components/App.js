import React from "react";
import ReactDOM from "react-dom";
import DataFetch from "./DataFetch";
import Form from "./Form";
const App = () => (
	<DataFetch endpoint="api/books" render={data => <Form data={data} />} />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
