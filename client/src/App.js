import React, { useReducer } from "react";
import Title from "./components/Title.js";
import Input from "./components/Input.js";
import DisplayTasks from "./components/DisplayTasks.js";

const App = () => {
	const [updateVal, forceUpdate] = useReducer((x) => x + 1, 0);

	return (
		<>
			<Title />
			<Input forceUpdate={forceUpdate} />
			<DisplayTasks updateVal={updateVal} />
		</>
	);
};

export default App;
