import { Router } from "express";
import IndexController from "../Controller/index.controller";
import { AddItem, GetItems } from "../Controller/items.controller";
const router = Router();

router.get("/", IndexController);
router.get("/api/items", GetItems);
router.post("/api/item", AddItem);

export = router;