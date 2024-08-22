import { Router } from "express";
import { revenueRoutes } from "./revenue.routes";

const routes = Router();

routes.use("/revenue",revenueRoutes);

export { routes }