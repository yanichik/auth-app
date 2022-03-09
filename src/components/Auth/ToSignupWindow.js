import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
const ToSignupWindow = () => {
	return (
		<div className={styles.toLoginAndSignupWindows}>
			<div className={styles.toLoginAndSignupWindowContent}>
				<h1>Hello Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<Link to="/signup">
					<button>Signup</button>
				</Link>
			</div>
		</div>
	);
};
export default ToSignupWindow;
