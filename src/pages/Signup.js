import { useNavigate } from "react-router-dom";
import SignupForm from "../components/Auth/SignupForm";
const Signup = (props) => {
	const navigate = useNavigate();
	const signupHandler = (data) => {
		console.log(data);
		props.setLoggedIn(true);
		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAg7hKEJZQz6TCgVGOqbcLcmnZOwLBsyuc",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, returnSecureToke: true }),
			}
		);
		navigate("/");
	};
	return (
		<div>
			<h2>Sign Up</h2>
			<SignupForm onSignup={signupHandler} loggedIn={props.loggedIn} />
		</div>
	);
};
export default Signup;
