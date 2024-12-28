import { filePath } from "../lib/filePath.js";
import $ from "jquery";

export const renderPageController = async (req, res) => {
  const path = filePath("public", "products", "createProduct.html");
  return res.sendFile(path);
};
export const getProductController = async (req, res) => {
  const path = filePath("public", "products", "getProduct.html");
  return res.sendFile(path);
};

export const createProductController = async (req, res) => {
  res.status(200).json({ message: "Product created!" });
};
