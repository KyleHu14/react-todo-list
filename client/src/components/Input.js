import React from "react";
import { useState } from "react";

const Input = (props) => {
	const [newTaskTitle, setTaskTitle] = useState("");

	const createTask = async (event) => {
		// Prevent Default means prevent default action of refreshing page
		event.preventDefault();

		// ASSEMBLING POST REQUEST :
		// 1. Body of post request
		const body = { taskName: newTaskTitle };
		// 2. Options for POST request
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};
		// 3. Response of post request
		const resp = await fetch("http://localhost:5000/task", options);
		props.forceUpdate();
		setTaskTitle("");
	};

	return (
		<form className="form-style" onSubmit={createTask}>
			<div className="form-elements">
				<input
					className="input-style"
					placeholder="Enter a Task!"
					value={newTaskTitle}
					onChange={(e) => setTaskTitle(e.target.value)}
				/>
				<button className="submit-btn" type="submit">
					Create a Task
				</button>
			</div>
		</form>
	);
};

export default Input;
