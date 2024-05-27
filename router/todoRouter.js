import { Router } from "express";
import { addTodo, getAllTodo } from "../controller/todoController.js";

const todoRouter = Router();

todoRouter.route("/todo").get(getAllTodo).post(addTodo);

export default todoRouter;
