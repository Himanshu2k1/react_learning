import React from "react";
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<h3>CRUD App</h3>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/Add"
						element={<Add />}
					/>
					<Route
						path="/edit"
						element={<Edit />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
