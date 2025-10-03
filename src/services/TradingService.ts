// Servicios de trading
import { Transaction } from "../models/transaction";
import { storage } from "../utils/storage";
import { TransactionTypeCommand } from "./pattern/command/orderCommand";

export class TradingService {
  // Obtener historial de transacciones
  getTransactionHistory(userId: string): Transaction[] {
    return storage.transactions.getTransactionsByUserId(userId);
  }

  executeOrder(
    command: TransactionTypeCommand,
    userId: string,
    symbol: string,
    quantity: number
  ): Promise<Transaction> {
    return command.execute(userId, symbol, quantity);
  }
}
