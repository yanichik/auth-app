import "./App.css";
import { useState } from "react";
import SignupForm from "./components/SignupForm";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const signupHandler = () => {
		setLoggedIn(true);
	};
	return (
		<div className="App">
			<SignupForm onSignup={signupHandler} />
			{loggedIn && <p>Logged In</p>}
			{!loggedIn && <p>Logged Out</p>}
		</div>
	);
}

export default App;
