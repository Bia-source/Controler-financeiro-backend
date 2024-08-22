import { CATEGORY, TYPE_TRANSACTION } from '../DTO/Revenue.DTO';
import { revenueDatabase } from '../models/revenue.entity';
import { CreateRevenueService } from "../services/revenue/createRevenue.service"
import { GetAllRevenueService } from '../services/revenue/getAllRevenue.service';

let paramsRevenue;

test('should be possible to create an revenue', async () => {
    const revenue = {
        description:"comprando cebola", 
        category: CATEGORY.market, 
        dateTransaction:new Date(), 
        type: TYPE_TRANSACTION.earnings, 
        value: 10.40
    } 

    const instancService = new CreateRevenueService();
    const result = await instancService.execute(revenue);
    paramsRevenue = result;
    expect(result).toHaveProperty("id");
    expect(result).not.toHaveProperty("messageError");
});

test('should be possible get all revenues', async () => {
   const instanceService = new GetAllRevenueService();
   const listResult = await instanceService.execute();
   expect(listResult).not.toHaveProperty("messageError");
})

afterAll( async ()=> {
  await revenueDatabase.destroy({ where: { id: paramsRevenue.id }})
})