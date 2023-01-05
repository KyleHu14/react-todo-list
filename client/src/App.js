import React, { useReducer } from "react";
import Title from "./components/Title.js";
import Input from "./components/Input.js";
import DisplayTasks from "./components/DisplayTasks.js";

const App = () => {
	/**
	 * This value serves as a way to render the todo list upon a creation of a new todo
	 */
	const [updateVal, forceUpdate] = useReducer((x) => x + 1, 0);

	return (
		<>
			<Title />
			<Input forceUpdate={forceUpdate} />
			<DisplayTasks forceUpdate={forceUpdate} updateVal={updateVal} />
		</>
	);
};

export default App;
