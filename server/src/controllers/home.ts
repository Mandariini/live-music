import { Router } from "express";
import { join } from "node:path";

const homeRouter = Router();

homeRouter.get("/", (_req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

export default homeRouter;
