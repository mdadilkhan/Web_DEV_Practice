import express, { Router } from "express";
import tasks from "./tasks/task.routes";
import projects from "./projects/project.routes";

const route: Router = express.Router();

route.use("/tasks", tasks);
route.use("/projects", projects);

export default route;
