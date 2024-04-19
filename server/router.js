import express from 'express';
import {filterTickets, getAll} from "./controller.js";


const router = express.Router();

router.get('/api/ticket', getAll);
router.post('/api/ticket', filterTickets);

export default router;
