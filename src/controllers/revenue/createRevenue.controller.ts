import { Request, Response } from "express";
import { CreateRevenueService } from "../../services/revenue/createRevenue.service";
import { RevenueDTO, RevenueDTORequest } from "../../DTO/Revenue.DTO";


export class CreateRevenueController {
    async handle(req: Request, res: Response) {
        try {
            const { description, category, dateTransaction, type, value } = req.body;
            const instanceService = new CreateRevenueService();
            const revenue = await instanceService.execute({description, category, dateTransaction, type, value});
            return res.status(201).json({ revenue });
        } catch (error) {
            return res.json({messageError: error})
        }
    }
}