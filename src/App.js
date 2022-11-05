import React, { useState } from "react";
import Title from "./components/Title.js";
import Input from "./components/Input.js";
import DisplayTasks from "./components/DisplayTasks.js";

import { getValues } from "./utils/Storage";

const App = () => {
	// A useState that represents the state of all the tasks at any given time
	const [taskList, setTaskList] = useState(getValues());

	// Tasks & setTasks is passed into both components for useState management
	return (
		<div>
			<Title />
			<Input tasks={taskList} setTasks={setTaskList} />
			<DisplayTasks tasks={taskList} setTasks={setTaskList} />
		</div>
	);
};

export default App;
