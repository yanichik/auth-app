import "./App.css";
import { useState } from "react";
import SignupForm from "./components/SignupForm";
import Logout from "./components/Logout";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const signupHandler = () => {
		setLoggedIn(true);
	};
	const logoutHandler = () => {
		setLoggedIn(false);
	};
	return (
		<div className="App">
			<SignupForm onSignup={signupHandler} loggedIn={loggedIn}/>
			{loggedIn && <Logout onLogout={logoutHandler} />}
		</div>
	);
}

export default App;
