import { Model } from "sequelize";
import { RevenueDTO, RevenueDTORequest } from "../../DTO/Revenue.DTO";
import { revenueDatabase } from "../../models/revenue.entity";


export class CreateRevenueService {
    async execute({ description, category, dateTransaction, type, value }: RevenueDTORequest): Promise<Model<RevenueDTO>>{
       try {
            revenueDatabase.sync();
            const newRevenue = await revenueDatabase.create({ description, category, dateTransaction, type, value });
            return newRevenue
        } catch (error) {
            return error;
        }
    }
}