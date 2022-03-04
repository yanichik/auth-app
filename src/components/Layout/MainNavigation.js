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
						<li>
							<Link to="/">Home</Link>
						</li>
						{!props.loggedIn && (
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						)}
						{!props.loggedIn && (
							<li>
								<Link to="/Login">Login</Link>
							</li>
						)}
						{props.loggedIn && (
							<li>
								<Link to="/" onClick={logoutHandler}>
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
