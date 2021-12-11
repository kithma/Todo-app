import classes from "./Layouts.module.css";

const MainLayout = (props) => {
	return <div className={classes.container}>
		{props.children}
	</div>
}

export default MainLayout