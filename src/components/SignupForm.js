const SignupForm = (props) => {
	const submitHandler = () => {};
	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="text" id="password" />
			</div>
			<button type="submit">Signup</button>
		</form>
	);
};  
export default SignupForm;
