import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { productRouter } from "./routes/product.js";

const app = express();
const port = process.env.PORT;

/*Router */
app.use(express.static("./public"));
app.use(express.json());
app.get("/"); // landing page

/*Router */
const product = productRouter;
app.use("/api/product", product);

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
