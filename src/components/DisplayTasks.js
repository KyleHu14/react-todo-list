import React, { useEffect, useState } from "react";

import { getValues } from "../utils/Storage";

const TaskList = (props) => {
	if (props.tasks === []) {
		return (
			<div className="task-list-container">
				<div className="task-container">No Tasks</div>
			</div>
		);
	} else {
		return (
			<div className="task-list-container">
				{props.tasks.map((task, index) => (
					<div key={index} className="task-container">
						{task}
					</div>
				))}
			</div>
		);
	}
};

export default TaskList;
