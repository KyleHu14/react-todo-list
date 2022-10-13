import React from "react";
import { useState } from "react";

import { addValue } from "../utils/Storage";
import { getValues } from "../utils/Storage";

const Input = (props) => {
	const [newTask, setTask] = useState("");

	const createTask = (event) => {
		// Prevent Default means prevent default action of refreshing page
		event.preventDefault();
		// Add the new task into local storage
		addValue(newTask);
		props.setTasks(getValues());
	};

	return (
		<form className="form-style" onSubmit={createTask}>
			<div className="form-elements">
				<input
					className="input-style"
					placeholder="Enter a Task!"
					value={newTask}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button className="submit-btn" type="submit">
					Create a Task
				</button>
			</div>
		</form>
	);
};

export default Input;
