import { Routes, Route } from "react-router-dom";
import TodoTaskList from "./components/todo/TodoTaskList";
import AddTaskForm from "./components/todo/AddTaskForm";
import DoneTaskList from "./components/todo/DoneTaskList";

const RoutesComponent = () => {
	return (
		<Routes>
			<Route path="/" element={<TodoTaskList />} />
			<Route path="/add-task" element={<AddTaskForm />} />
			<Route path="/done-task-list" element={<DoneTaskList />} />
		</Routes>
	)
}
export default RoutesComponent;