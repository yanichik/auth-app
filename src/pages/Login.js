import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
const Login = (props) => {
	const navigate = useNavigate();
	let error;
	const loginHandler = (data) => {
		console.log(data);
		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAg7hKEJZQz6TCgVGOqbcLcmnZOwLBsyuc",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, returnSecureToke: true }),
			}
		)
			.then((res) => {
				if (!res.ok) {
					console.log(res);
					error = data.error.message;
					throw new Error(error);
				}
				console.log("check");
				props.setLoggedIn(true);
				res.json().then((data) => {
					console.log(data);
					localStorage.setItem("token", data.idToken);
					localStorage.setItem("email", data.email);
					localStorage.setItem("loggedIn", true);
					navigate("/home");
				});
			})
			.catch((err) => {
				console.log(err);
				error = err;
			});
	};
	return (
		<div>
			<h2>Login</h2>
			<LoginForm
				onLogin={loginHandler}
				loggedIn={props.loggedIn}
				error={error}
			/>
		</div>
	);
};
export default Login;
