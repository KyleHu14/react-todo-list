import React from "react";

import { delItem, getValues } from "../utils/Storage";

const TaskList = (props) => {
	// Given an index, deletes the targeted index in local storage
	// Updates tasks use state as well
	const delTask = (index) => {
		delItem(index);
		props.setTasks(getValues());
	};

	if (props.tasks === []) {
		return (
			<div className="task-list-container">
				<div className="task-container">No Tasks</div>
			</div>
		);
	} else {
		return (
			<div className="task-list-container">
				{Object.keys(props.tasks).map((key, i) => (
					<div key={i} className="task-container">
						<button
							className="done-btn"
							onClick={() => {
								delTask(key);
							}}>
							Done
						</button>
						<div className="task-name">{props.tasks[key]}</div>
					</div>
				))}
			</div>
		);
	}
};

export default TaskList;
