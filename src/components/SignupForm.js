const SignupForm = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();
		props.onSignup();
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<button type="submit">Signup</button>
			</form>
			{!props.loggedIn && <p>Logged Out</p>}
		</div>
	);
};
export default SignupForm;
