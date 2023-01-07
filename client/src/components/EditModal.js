import React from "react";
import { useState } from "react";

const EditModal = ({
	open,
	onClose,
	curTitle,
	setCurTitle,
	curTaskId,
	forceUpdate,
}) => {
	const updateTask = async (newTitle) => {
		try {
			// Request Body
			const body = { newTaskName: newTitle };
			// Request Options
			const options = {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			};
			// Response of the PUT request
			const resp = await fetch(
				`http://localhost:5000/task/${curTaskId}`,
				options
			);
		} catch (error) {
			console.log(error);
		}
		forceUpdate();
		onClose();
	};

	if (!open) return null;
	return (
		<div className="overlay">
			<div className="modal-content">
				<div className="modal-title">Editing Task..</div>
				<div className="modal-subtitle">Task Title</div>
				<input
					className="input-task-title"
					value={curTitle}
					onChange={(e) => setCurTitle(e.target.value)}
				/>
				<div className="modal-btns">
					<button className="cancel-btn" onClick={onClose}>
						Cancel
					</button>
					<button
						className="update-btn"
						onClick={() => {
							updateTask(curTitle);
						}}>
						Update Task
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
