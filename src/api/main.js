//repo routes
import express from 'express';

import { createRepo, getRepos} from "./controllers";

const router = express.Router();
router.post("/repo", createRepo);
router.get("/repo", getRepos);

export default router;
