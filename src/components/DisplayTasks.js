import React from "react";

import { delItem, getValues } from "../utils/Storage";

const TaskList = (props) => {
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
				{Object.entries(props.tasks).map((key, val) => (
					<div key={key} className="task-container">
						<button
							className="done-btn"
							onClick={() => {
								delTask(key);
							}}>
							Done
						</button>
						<div className="task-name">{val}</div>
					</div>
				))}
			</div>
		);
	}
};

export default TaskList;
