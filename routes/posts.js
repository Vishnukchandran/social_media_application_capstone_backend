import express from "express";
import { getFeedPosts, getUserPosts, likePost, postComment } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

router.patch("/:id/like", verifyToken, likePost);

router.post("/:id/comment", verifyToken, postComment);

export default router;
