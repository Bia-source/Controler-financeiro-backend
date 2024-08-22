import { Request, Response } from "express";
import { GetAllRevenueService } from '../../services/revenue/getAllRevenue.service';

export class GetAllRevenueController {
    async handle(req: Request, res: Response) {
        try {
            const instanceService = new GetAllRevenueService();
            const revenues = await instanceService.execute();
            return res.status(200).json({ revenues });
        } catch (error) {
            return res.json({messageError: error})
        }
    }
}