import { Model } from "sequelize";
import { revenueDatabase } from "../../models/revenue.entity";
import { RevenueDTO } from "../../DTO/Revenue.DTO";


export class GetAllRevenueService {
    async execute(): Promise<Model<RevenueDTO>[]> {
        try {
            const listRevenues = await revenueDatabase.findAll();
            return listRevenues;
        } catch (error) {
            return error;
        }
    }
}