const Logout = (props) => {
	const logoutHandler = () => {
		props.onLogout();
	};
	return (
		<div>
			{/* <p>Logged In</p> */}
			<button onClick={logoutHandler}>Click to Logout</button>
		</div>
	);
};

export default Logout;
