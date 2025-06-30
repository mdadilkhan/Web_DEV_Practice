import express, { Router } from "express";
import taskRouter from "./tasks/task.routes";
import projectRouter from "./projects/project.routes";

const route: Router = express.Router();

route.use("/tasks", taskRouter);
route.use("/projects", projectRouter);

export default route;
