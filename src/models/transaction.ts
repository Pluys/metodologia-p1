import { TRANSACTION_STATUS, TRANSACTION_TYPE } from "./TYPES";

export class Transaction {
  id: string;
  userId: string;
  type: TRANSACTION_TYPE;
  symbol: string;
  quantity: number;
  price: number;
  timestamp: Date;
  fees: number;
  status: TRANSACTION_STATUS;

  constructor(
    id: string,
    userId: string,
    type: TRANSACTION_TYPE,
    symbol: string,
    quantity: number,
    price: number,
    fees: number
  ) {
    this.id = id;
    this.userId = userId;
    this.type = type;
    this.symbol = symbol;
    this.quantity = quantity;
    this.price = price;
    this.fees = fees;
    this.timestamp = new Date();
    this.status = TRANSACTION_STATUS.PENDING;
  }

  complete(): void {
    this.status = TRANSACTION_STATUS.COMPLETED;
  }

  fail(): void {
    this.status = TRANSACTION_STATUS.FAILED;
  }

  getTotalAmount(): number {
    return this.quantity * this.price;
  }
}
