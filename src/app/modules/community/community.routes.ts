import express from "express";
import { createCommunity, joinCommunity, leaveCommunity } from "./community.controller";
const router = express.Router();
router.post("/create", createCommunity);
router.post("/join/:id", joinCommunity);
router.post("/leave/:id", leaveCommunity);

const communityRouter = router;
export default communityRouter;