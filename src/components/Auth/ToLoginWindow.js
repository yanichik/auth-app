import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
const ToLoginWindow = () => {
	return (
		<div className={styles.toLoginWindow}>
			<div className={styles.toLoginAndSignupWindowContent}>
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<Link to="/login">
					<button>Login</button>
				</Link>
			</div>
		</div>
	);
};
export default ToLoginWindow;
