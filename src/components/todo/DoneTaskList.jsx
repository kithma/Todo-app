import TaskContext from "../../store/context";
import ListItem from "../shared/ListItem";
import { useContext } from "react";

const DoneTaskList = () => {
	const taskContext = useContext(TaskContext);
	
	return <div>
		{taskContext.tasks.map(task => {
			return <ListItem
						key={task.id}
						item={task}
					/>
			})}
</div>
}

export default DoneTaskList;