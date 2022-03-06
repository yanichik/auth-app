import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/Auth/Logout";
import MainNavigation from "./components/Layout/MainNavigation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const logoutHandler = () => {
		setLoggedIn(false);
		localStorage.clear();
	};
	useEffect(() => {
		const loginStatus = localStorage.getItem("loggedIn");
		console.log("loginStatus: " + loginStatus);
		setLoggedIn(loginStatus);
	}, []);
	console.log(loggedIn);
	return (
		<div className="App">
			<MainNavigation loggedIn={loggedIn} onLogout={logoutHandler}>
				<Routes>
					<Route path="/" element={<Navigate to="/signup" />} />
					<Route path="/home" element={<Home />} />
					<Route
						path="/login"
						element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
					/>
					<Route
						path="/signup"
						element={<Signup setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
					/>
				</Routes>
				{loggedIn && <Logout onLogout={logoutHandler} />}
			</MainNavigation>
		</div>
	);
}

export default App;
