import { useRef } from "react";
const LoginForm = (props) => {
	const pwRef = useRef();
	const userRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const email = userRef.current.value;
		const password = pwRef.current.value;
		// reset inputs to blank
		userRef.current.value = "";
		pwRef.current.value = "";
		props.onLogin({
			email: email,
			password: password,
		});
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="text" id="email" ref={userRef} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" ref={pwRef} />
				</div>
				<button type="submit">Login</button>
			</form>
			{!props.loggedIn && <p>Logged Out</p>}
		</div>
	);
};
export default LoginForm;