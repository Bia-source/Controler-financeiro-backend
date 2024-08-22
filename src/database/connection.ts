import {Sequelize} from "sequelize";
import "dotenv/config";

export const database = new Sequelize(
    process.env.DATABASE_NAME ?? 'financial_control', 
    process.env.DATABASE_USERNAME ?? 'root',
    process.env.DATABASE_PASSWORD ?? 'root123',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

export async function authenticate(){
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
