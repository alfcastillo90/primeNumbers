import { Router } from "express";
import { param } from "express-validator";
import { getNumbers } from "../controllers/numbers";

const router = Router();

router.get('/:id', param('id').isNumeric() ,getNumbers); 

export default router;