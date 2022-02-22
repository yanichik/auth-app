import { useRef } from "react";
const SignupForm = (props) => {
	const pwRef = useRef();
	const userRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		props.onSignup();
		// reset inputs to blank
		userRef.current.value = "";
		pwRef.current.value = "";
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" ref={userRef} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" ref={pwRef} />
				</div>
				<button type="submit">Signup</button>
			</form>
			{!props.loggedIn && <p>Logged Out</p>}
		</div>
	);
};
export default SignupForm;
