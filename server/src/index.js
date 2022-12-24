const express = require("express");
const { PrismaClient } = require("@prisma/client");

// Initializing variables
const prisma = new PrismaClient();
const app = express();

// Setting up middleware
app.use(cors());
app.use(express.json());
