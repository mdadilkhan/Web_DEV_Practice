import express, { Router } from "express";
import {
  getProjectHandler,
  listProjectHandler,
  listProjectTaskHandler,
} from './project.controller';
import authenticateUser from "../../middleware/authenticate-user";

const projects: Router = express.Router();


projects.use(authenticateUser)
projects.get("/:id", getProjectHandler);
projects.get("/", listProjectHandler);
projects.get("/:id/task", listProjectTaskHandler);

export default projects;

