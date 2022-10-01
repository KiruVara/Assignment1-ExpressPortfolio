//the router to display functions on the site using Router function and export it so its viewable in router
import { Router } from "express";
import { helloWorld } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/hello', helloWorld);

export default router; 