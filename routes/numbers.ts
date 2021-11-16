import { Router } from "express";
import { getNumbers } from "../controllers/numbers";

const router = Router();

router.get('/', getNumbers); 

export default router;