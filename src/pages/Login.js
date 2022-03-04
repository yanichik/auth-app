import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
const Login = (props) => {
	const navigate = useNavigate();
	const loginHandler = (data) => {
		console.log(data);
		props.setLoggedIn(true);
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
			// useNavigate (...) is v6 instead of useHistory from v5. no longer need "".push"
			navigate("/");
		});
	};
	return (
		<div>
			<h2>Login</h2>
			<LoginForm onLogin={loginHandler} loggedIn={props.loggedIn} />
		</div>
	);
};
export default Login;
