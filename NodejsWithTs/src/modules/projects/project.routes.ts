import express, { Router } from "express";
import {getProject,listProjectTasks,listProjects} from './project.controller'
const projects: Router = express.Router();

projects.get("/",listProjects);
projects.get("/:id",getProject);
projects.get("/:id/task",listProjectTasks);

export default projects;
