import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Logout from "./components/Auth/Logout";
import MainNavigation from "./components/Layout/MainNavigation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const logoutHandler = () => {
		setLoggedIn(false);
	};
	return (
		<div className="App">
			<MainNavigation loggedIn={loggedIn} onLogout={logoutHandler}>
				{loggedIn && <Logout onLogout={logoutHandler} />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
					/>
					<Route
						path="/signup"
						element={<Signup setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
					/>
				</Routes>
			</MainNavigation>
		</div>
	);
}

export default App;
