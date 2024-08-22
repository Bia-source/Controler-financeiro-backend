
export type RevenueDTO = {
    id: string;
    description: string;
    category: CATEGORY;
    dateTransaction: Date;
    type: TYPE_TRANSACTION;
    value: number;
    createdAt: Date;
    updatedAt: Date;
}

export type RevenueDTORequest = {
    description: string;
    category: CATEGORY;
    dateTransaction: Date;
    type: TYPE_TRANSACTION;
    value: number;
}

export enum CATEGORY{
    accounts = "accounts",
    miscellaneous = "miscellaneous",
    personal = "personal", 
    market = "market", 
    buys = "buys"
}

export enum TYPE_TRANSACTION{
    earnings = "earnings",
    expenses = "expenses"
}