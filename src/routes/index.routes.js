import { Router } from "express";
import res from "express/lib/response";

import {
  renderTasks,
  createTasks,
  renderTasksEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTasks);

router.get("/tasks/:id/edit", renderTasksEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;
