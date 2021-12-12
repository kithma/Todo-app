import styles from "./Layouts.module.css";

const MainLayout = (props) => {
	return <div className={styles.container}>
		{props.children}
	</div>
}

export default MainLayout