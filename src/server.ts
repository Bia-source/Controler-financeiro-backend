import express from "express";
import cors from "cors";
import "dotenv/config";
import { authenticate } from "./database/connection";
import { routes } from "./routes/index.routes";

export const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, ()=> {
    authenticate();
    console.log("Server in running")
})