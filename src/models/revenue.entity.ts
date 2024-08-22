import { DataTypes } from "sequelize";
import { database } from "../database/connection";

export const revenueDatabase = database.define(
    'revenue',
    {
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      }, 
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM,
        values: ['accounts','miscellaneous', 'personal', 'market', 'buys'],
        allowNull: false
      },
      dateTransaction:{
        type: DataTypes.DATE,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ['earnings', 'expenses'],
        defaultValue: 'earnings'
      },
      value: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      }
    }
  );