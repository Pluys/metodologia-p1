import { Transaction } from "../../../models/transaction";
import { TRANSACTION_TYPE } from "../../../models/TYPES";
import { storage } from "../../../utils/storage";
import { TransactionTypeCommand } from "./orderCommand";

export class BuyCommand extends TransactionTypeCommand {
  constructor() {
    super();
  }

  // Actualizar portafolio después de compra
  protected override updatePortfolio(
    userId: string,
    symbol: string,
    quantity: number,
    price: number
  ): void {
    const portfolio = storage.portfolios.getPortfolioByUserId(userId);
    if (!portfolio) return;

    // Agregar las acciones al portafolio
    portfolio.addHolding(symbol, quantity, price);

    // Recalcular valores actuales
    this.recalculatePortfolioValues(portfolio);

    storage.portfolios.updatePortfolio(portfolio);
  }

  override async execute(
    userId: string,
    symbol: string,
    quantity: number
  ): Promise<Transaction> {
    // Obtener usuario
    const user = storage.users.getUserById(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Obtener activo
    const asset = storage.assets.getAssetBySymbol(symbol);
    if (!asset) {
      throw new Error("Activo no encontrado");
    }

    // El precio de ejecución es siempre el precio actual de mercado
    const executionPrice = asset.currentPrice;

    // Calcular costo total incluyendo comisiones
    const {
      grossAmount,
      fees,
      totalCostOrNetAmount: totalCost,
    } = this.calculateData(quantity, executionPrice, TRANSACTION_TYPE.BUY);

    // Verificar fondos suficientes
    if (!user.canAfford(totalCost)) {
      throw new Error("Fondos insuficientes");
    }

    // Crear transacción
    const transactionId = this.generateTransactionId();
    const transaction = new Transaction(
      transactionId,
      userId,
      TRANSACTION_TYPE.BUY,
      symbol,
      quantity,
      executionPrice,
      fees
    );

    return this.handleTransaction(
      transaction,
      user,
      TRANSACTION_TYPE.BUY,
      executionPrice,
      totalCost
    );
  }

  protected override calculate(gA: number, f: number): number {
    return gA + f;
  }
}
