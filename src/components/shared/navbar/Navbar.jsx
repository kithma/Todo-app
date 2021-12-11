import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return <div className={classes.navbar}>
		<ul>
			<li>
				<Link to="/">
					Todo List
				</Link>
			</li>
			<li>
				<Link to="/add-task">
					Add task
				</Link>
			</li>
			<li>
				<Link to="/done-task-list">
					Done tasks
				</Link>
				
			</li>
		</ul>
	</div>
}

export default Navbar;