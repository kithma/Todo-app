import { useEffect, useState, useContext } from "react";
import ListItem from "../shared/ListItem";
import TaskContext from "../../store/context";

const TodoTaskList = () => {
	const [tasks, setTasks] = useState([]);
	const taskContext = useContext(TaskContext);

	const markTaskAsDone = (task) => {
		taskContext.doneTask(task);
		const filteredTasks = filterDoneTasks(task);
		setTasks(filteredTasks);
	}

	const filterDoneTasks = (task) => {
		const copyTasks = [...tasks];
		return copyTasks.filter(t => t.id !== task.id);
	}

	useEffect(() => {
		fetch('https://todo-app-97268-default-rtdb.firebaseio.com/tasks.json'
		).then(response => { return response.json() }
		).then(data => {
			const tasksList = []; 
			for (const key in data) {
				if(!taskContext.tasks.find(task => task.id === key))
					tasksList.push({...data[key],id:key})
			}
			setTasks(tasksList);
		})
	},[]);
	return <div>
		{tasks.map(task => {
			return <ListItem
						key={task.id}
						item={task}
						actionText={"Done"}
						action={() => markTaskAsDone(task)}
					/>
			})}
	</div>
}

export default TodoTaskList;