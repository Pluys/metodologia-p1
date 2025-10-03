import { Transaction } from "../../../models/transaction";
import { TRANSACTION_TYPE } from "../../../models/TYPES";
import { storage } from "../../../utils/storage";
import { TransactionTypeCommand } from "./orderCommand";

export class SellCommand extends TransactionTypeCommand {
  constructor() {
    super();
  }

  protected override updatePortfolio(
    userId: string,
    symbol: string,
    quantity: number,
    price: number
  ): void {
    const portfolio = storage.portfolios.getPortfolioByUserId(userId);
    if (!portfolio) return;

    // Remover las acciones del portafolio
    portfolio.removeHolding(symbol, quantity);

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

    // Verificar holdings suficientes
    const portfolio = storage.portfolios.getPortfolioByUserId(userId);
    if (!portfolio) {
      throw new Error("Portafolio no encontrado");
    }

    const holding = portfolio.holdings.find((h) => h.symbol === symbol);
    if (!holding || holding.quantity < quantity) {
      throw new Error("No tienes suficientes activos para vender");
    }

    // El precio de ejecución es siempre el precio actual de mercado
    const executionPrice = asset.currentPrice;

    // Calcular beneficio bruto y comisiones
    const {
      grossAmount,
      fees,
      totalCostOrNetAmount: netAmount,
    } = this.calculateData(quantity, executionPrice, TRANSACTION_TYPE.SELL);

    // Crear transacción
    const transactionId = this.generateTransactionId();
    const transaction = new Transaction(
      transactionId,
      userId,
      TRANSACTION_TYPE.SELL,
      symbol,
      quantity,
      executionPrice,
      fees
    );

    return this.handleTransaction(
      transaction,
      user,
      TRANSACTION_TYPE.SELL,
      executionPrice,
      netAmount
    );
  }

  protected override calculate(gA: number, f: number): number {
    return gA - f;
  }
}
