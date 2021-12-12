import { createContext, useState } from "react";

const TaskContext = createContext({
	tasks: []
});

export const TaskContextProvider = (props) => {
	const [userTasks, setUserTasks] = useState([]);

	const doneTask = (task) => {
		setUserTasks([...userTasks, task])
	}

	const context = {
		tasks: userTasks,
		doneTask
	}

	return <TaskContext.Provider value={context}>
		{props.children}
	</TaskContext.Provider>
}

export default TaskContext;