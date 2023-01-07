import { useEffect, useState } from "react";
import EditModal from "./EditModal";

const DisplayTasks = ({ forceUpdate, updateVal }) => {
	const [curTitle, setCurTitle] = useState("");
	const [curTaskId, setCurTaskId] = useState("");
	const [openModal, setOpenModal] = useState(false);
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

	const delTask = async (id) => {
		try {
			const options = { method: "DELETE" };
			const resp = await fetch(
				`http://localhost:5000/task/${id}`,
				options
			);
			forceUpdate();
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * UseEffect : Check if there are new tasks
	 */
	useEffect(() => {
		getTasks();
	}, [updateVal]);

	return (
		<div className="task-list-container">
			{tasks.map((task) => (
				<div key={task.id} className="task-container">
					<div className="task-name">{task.taskName}</div>
					<button
						className="done-btn"
						onClick={() => delTask(task.id)}>
						Done
					</button>
					<button
						className="modal-btn"
						onClick={() => {
							setOpenModal(true);
							setCurTitle(task.taskName);
							setCurTaskId(task.id);
						}}>
						Edit
					</button>
				</div>
			))}
			<EditModal
				curTitle={curTitle}
				setCurTitle={setCurTitle}
				curTaskId={curTaskId}
				open={openModal}
				onClose={() => setOpenModal(false)}
				forceUpdate={forceUpdate}
			/>
		</div>
	);
};

export default DisplayTasks;
