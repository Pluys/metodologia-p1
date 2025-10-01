import { ORDER_STATUS, TRANSACTION_TYPE } from "./TYPES";

export class Order {
  id: string;
  userId: string;
  type: "market";
  action: TRANSACTION_TYPE;
  symbol: string;
  quantity: number;
  price?: number;
  status: ORDER_STATUS;
  createdAt: Date;
  executedAt?: Date;

  constructor(
    id: string,
    userId: string,
    type: "market",
    action: TRANSACTION_TYPE,
    symbol: string,
    quantity: number,
    price?: number
  ) {
    this.id = id;
    this.userId = userId;
    this.type = type;
    this.action = action;
    this.symbol = symbol;
    this.quantity = quantity;
    this.price = price;
    this.status = ORDER_STATUS.PENDING;
    this.createdAt = new Date();
  }

  execute(): void {
    this.status = ORDER_STATUS.EXECUTED;
    this.executedAt = new Date();
  }

  cancel(): void {
    this.status = ORDER_STATUS.CANCELLED;
  }
}
