import React, { useState } from "react";
import Title from "./components/Title.js";
import Input from "./components/Input.js";
import DisplayTasks from "./components/DisplayTasks.js";

import { getValues } from "./utils/Storage";

const App = () => {
	const [taskList, setTaskList] = useState(getValues());

	return (
		<div>
			<Title />
			<Input tasks={taskList} setTasks={setTaskList} />
			<DisplayTasks tasks={taskList} />
		</div>
	);
};

export default App;
