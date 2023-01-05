const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

// Initializing variables
const prisma = new PrismaClient();
const app = express();

// Setting up middleware
app.use(cors());
app.use(express.json());

// Get Requests

/**
 * Returns a json object of all tasks
 * @returns {json} tasks - A prisma query of all tasks stored in the db
 */
app.get("/task", async (req, res) => {
	const tasks = await prisma.task.findMany();
	res.json(tasks);
});

// Post Requests

/**
 * Returns a json object of the task that was just created
 * @returns {json} task - The task that was just created
 */
app.post("/task", async (req, res) => {
	const { taskName, taskDesc } = req.body;

	const result = await prisma.task.create({
		data: {
			taskName: taskName,
			taskDesc: taskDesc,
		},
	});

	res.json(result);
});

// Delete Requests
app.delete("/task/:id", async (req, res) => {
	const taskId = parseInt(req.params.id);
	const delTask = await prisma.task.delete({
		where: {
			id: taskId,
		},
	});

	res.json(delTask);
});

// Starting the Server on port 3000
const server = app.listen(5000, () =>
	console.log(`🚀 Server ready at: http://localhost:5000`)
);
