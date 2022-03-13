import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import ToSignupWindow from "../components/Auth/ToSignupWindow";
import styles from "../components/Auth/Auth.module.css";
import AnimatedLogin from "../animate/AnimatedLogin";
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
					localStorage.setItem("token", data.idToken);
					localStorage.setItem("email", data.email);
					localStorage.setItem("loggedIn", true);
					props.setLoggedIn(true);
					navigate("/home");
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};
	return (
		<AnimatedLogin>
			<div className={styles.loginPage}>
				<div className={styles.loginSideOfWindow}>
					<h2>Login</h2>
					<LoginForm onLogin={loginHandler} loggedIn={props.loggedIn} />
				</div>
				<ToSignupWindow />
			</div>
			{error.length > 0 ? <p>{error}</p> : ""}
		</AnimatedLogin>
	);
};
export default Login;
