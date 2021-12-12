import styles from "./Todo.module.css";
import Card from "../layouts/Card";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const AddTaskForm = () => {
	const navigate = useNavigate();
	const titleRef = useRef();
	const imageRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
	
		const task = {
			title: titleRef.current.value,
			image:imageRef.current.value
		}
		fetch(`https://todo-app-97268-default-rtdb.firebaseio.com/tasks.json`,
			{
				method: 'POST',
				body: JSON.stringify(task),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(navigate("/"))
	}

	return (<Card>
				<form className={styles.form}>
					<label htmlFor="title">Task title</label>
					<input id="title" type="text" ref={titleRef} />
			
					<label htmlFor="image">Task image</label>
					<input id="image" type="url" ref={imageRef} />
			
					<div className={styles.actions}>
						<button onClick={onSubmit}>Save</button>
					</div>
				</form>
			</Card>
		)
}

export default AddTaskForm;