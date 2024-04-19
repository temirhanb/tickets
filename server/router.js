import express from 'express';
import {getAll} from "./controller.js";


const router = express.Router();

router.get('/api/ticket', getAll);
// router.post('/api/todo', createTodo);
// router.delete('/api/todo/:id', deleteTodo);
// router.put('/api/todo', editTodo);

export default router;
