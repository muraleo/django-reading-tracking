import React from "react";
import ReactDOM from "react-dom";
import DataFetch from "./DataFetch";
import List from "./List";
import Form from "./Form";

const App = () => (
	<React.Fragment>
		<DataFetch endpoint="api/books" render={data => <List data={data} />} />
		<Form endpoint="api/books" />
	</React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
