import express from "express";
import {
  renderPageController,
  createProductController,
  getProductController,
} from "../controller/productController.js";
const router = express.Router();

router.route("/").get(renderPageController);
router.route("/:id").get(getProductController);
router.route("/").post(createProductController);

export { router as productRouter };
