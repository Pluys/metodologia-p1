import { Transaction } from "../../models/transaction";

export class transactionsF {
  private transactions: Transaction[] = [];

  constructor() {}

  // Métodos para transacciones
  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  getTransactionsByUserId(userId: string): Transaction[] {
    return this.transactions.filter((t) => t.userId === userId);
  }

  getAllTransactions(): Transaction[] {
    return [...this.transactions];
  }
}
