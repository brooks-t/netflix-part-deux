import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

// Note react-router-dom was updated in v6 and the syntax has changed. Correct syntax is below:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
	const user = null;

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					{!user ? (
						<Route path="/login" element={<LoginScreen />} />
					) : (
						<Route path="/" element={<HomeScreen />} />
					)}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
