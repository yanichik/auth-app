import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/Auth/SignupForm";
import ToLoginWindow from "../components/Auth/ToLoginWindow";
import styles from "../components/Auth/Auth.module.css";
const Signup = (props) => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const signupHandler = (data) => {
		// console.log(data);
		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAg7hKEJZQz6TCgVGOqbcLcmnZOwLBsyuc",
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
		<div>
			{props.message && <p>{props.message}</p>}
			<div className={styles.signupPage}>
				<div className={styles.signupSideOfWindow}>
					<h2>Sign Up</h2>
					<SignupForm onSignup={signupHandler} loggedIn={props.loggedIn} />
				</div>
				<ToLoginWindow />
			</div>
			{error.length > 0 ? <p>{error}</p> : ""}
		</div>
	);
};
export default Signup;
