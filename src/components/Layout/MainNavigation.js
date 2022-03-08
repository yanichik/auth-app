import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const MainNavigation = (props) => {
	const logoutHandler = () => {
		props.onLogout();
	};
	return (
		<div>
			<header>
				<nav className={styles.nav}>
					<ul>
						{props.loggedIn && (
							<li>
								<Link to="/home" className={styles.link}>
									Home
								</Link>
							</li>
						)}
						{!props.loggedIn && (
							<li>
								<Link to="/signup" className={styles.link}>
									Sign Up
								</Link>
							</li>
						)}
						{!props.loggedIn && (
							<li>
								<Link to="/login" className={styles.link}>
									Login
								</Link>
							</li>
						)}
						{props.loggedIn && (
							<li>
								<Link to="/" onClick={logoutHandler} className={styles.link}>
									Logout
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</header>
			{props.children}
		</div>
	);
};
export default MainNavigation;
