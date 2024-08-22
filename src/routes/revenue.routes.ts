import { Router } from "express";
import { CreateRevenueController } from "../controllers/revenue/createRevenue.controller";
import { GetAllRevenueController } from "../controllers/revenue/getAllRevenue.controller";

const revenueRoutes = Router();

const revenueCreateController = new CreateRevenueController();
const revenueGetAllController = new GetAllRevenueController();

revenueRoutes.post("/", revenueCreateController.handle);
revenueRoutes.get("/", revenueGetAllController.handle);

export { revenueRoutes }