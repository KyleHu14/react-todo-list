import { useEffect, useState } from "react";

const DisplayTasks = (props) => {
	const [tasks, setTasks] = useState([]);

	const getTasks = async () => {
		try {
			// Request Options
			const options = { method: "GET" };
			// Response of the GET request
			const resp = await fetch("http://localhost:5000/task", options);
			// Convert response into a json
			const taskList = await resp.json();

			setTasks(taskList);
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * UseEffect : Check if there are new tasks
	 */
	useEffect(() => {
		getTasks();
	}, [props.updateVal]);

	return (
		<div className="task-list-container">
			{tasks.map((task) => (
				<div key={task.id} className="task-container">
					<div className="task-name">{task.taskName}</div>
					<button className="done-btn" onClick={() => {}}>
						Done
					</button>
				</div>
			))}
		</div>
	);
};

export default DisplayTasks;
