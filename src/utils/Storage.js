// Adds a value to the Local Storage
const addValue = (newValue) => {
	// [VARIABLES]
	// 1. nextId -> represents the next avaialable id that can be assigned to a value

	// Get the nextId of the localStorage
	let nextId = Number(localStorage.getItem("nextId"));

	// If nextId does not exist
	if (!nextId) {
		// Assign the first value to the id of 0
		localStorage.setItem("0", newValue);
		// Initialize nextId as 1
		localStorage.setItem("nextId", JSON.stringify(1));
	} else {
		// if nextId DOES exist, initialize newValue with nextId
		localStorage.setItem(nextId, newValue);
		// increment nextId
		localStorage.setItem("nextId", JSON.stringify(nextId + 1));
	}
};

// returns an array of values in local storage
const getValues = () => {
	// Initialize the array of values
	let valueArray = [];
	// get nextId to see how many values we loop through
	const nextId = Number(localStorage.getItem("nextId"));
	for (var i = 0; i < nextId; i++) {
		valueArray[i] = localStorage.getItem(JSON.stringify(i));
	}

	return valueArray;
};

export { addValue, getValues };
