import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
const Login = (props) => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const loginHandler = (data) => {
		// console.log(data);
		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAg7hKEJZQz6TCgVGOqbcLcmnZOwLBsyuc",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, returnSecureToke: true }),
			}
		).then((res) => {
			res
				.json()
				.then((data) => {
					if (!res.ok) {
						console.log(res);
						setError(data.error.message);
						throw new Error(data.error.message);
					}
					props.setLoggedIn(true);
					// console.log(data);
					localStorage.setItem("token", data.idToken);
					localStorage.setItem("email", data.email);
					localStorage.setItem("loggedIn", true);
					navigate("/home");
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};
	return (
		<div>
			<h2>Login</h2>
			<LoginForm onLogin={loginHandler} loggedIn={props.loggedIn} />
			{error.length > 0 ? <p>{error}</p> : ""}
		</div>
	);
};
export default Login;
