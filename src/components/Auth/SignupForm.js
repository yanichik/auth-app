import { useRef } from "react";
import styles from "./Auth.module.css";
const SignupForm = (props) => {
	const pwRef = useRef();
	const userRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const email = userRef.current.value;
		const password = pwRef.current.value;
		// reset inputs to blank
		userRef.current.value = "";
		pwRef.current.value = "";
		props.onSignup({
			email: email,
			password: password,
		});
	};
	return (
		<div className={[styles.formContainer, styles.signinContainer].join(" ")}>
			<form onSubmit={submitHandler}>
				<div>
					<input type="text" id="email" ref={userRef} placeholder="Email" />
				</div>
				<div>
					<input
						type="password"
						id="password"
						ref={pwRef}
						placeholder="Password"
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
			{/* {!props.loggedIn && <p>Logged Out</p>} */}
		</div>
	);
};
export default SignupForm;
