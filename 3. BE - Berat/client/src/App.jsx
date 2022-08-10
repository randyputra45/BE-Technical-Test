import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WeightAdd from "./pages/cruds/WeightAdd";
import WeightTable from "./pages/cruds/WeightTable";
import WeightDetails from "./pages/cruds/WeightDetails";
import WeightEdit from "./pages/cruds/WeightEdit";
import WeightDelete from "./pages/cruds/WeightDelete";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<WeightTable />} />
					<Route exact path="/cruds" element={<WeightTable />} />					
					<Route exact path="/cruds/new" element={<WeightAdd />} />
					<Route exact path="/cruds/:_id" element={<WeightDetails />} />
					<Route exact path="/cruds/:_id/edit" element={<WeightEdit />} />
					<Route exact path="/cruds/:_id/delete" element={<WeightDelete />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
