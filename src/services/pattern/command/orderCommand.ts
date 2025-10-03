import { config } from "../../../config/config";
import { Transaction } from "../../../models/transaction";
import { TRANSACTION_TYPE } from "../../../models/TYPES";
import { storage } from "../../../utils/storage";
import { Portfolio } from "../../../models/portfolio";
import { User } from "../../../models/user";

export abstract class TransactionTypeCommand {
  constructor() {}

  abstract execute(
    userId: string,
    symbol: string,
    quantity: number
  ): Promise<Transaction>;

  // Cálculo de comisiones
  protected calculateFees(amount: number, type: TRANSACTION_TYPE): number {
    const feePercentage =
      type === TRANSACTION_TYPE.BUY
        ? config.tradingFees.buyFeePercentage
        : config.tradingFees.sellFeePercentage;
    const calculatedFee = amount * feePercentage;
    return Math.max(calculatedFee, config.tradingFees.minimumFee);
  }

  // Recalcular valores del portafolio
  protected recalculatePortfolioValues(portfolio: Portfolio): void {
    // Actualizar el valor actual de cada holding
    portfolio.holdings.forEach((holding) => {
      const asset = storage.assets.getAssetBySymbol(holding.symbol);
      if (asset) {
        holding.updateCurrentValue(asset.currentPrice);
      }
    });

    // Calcular totales del portafolio
    portfolio.calculateTotals();
  }

  // Simulación de impacto en el mercado después de una operación
  protected simulateMarketImpact(
    symbol: string,
    quantity: number,
    action: TRANSACTION_TYPE
  ): void {
    const marketData = storage.marketData.getMarketDataBySymbol(symbol);
    if (!marketData) return;

    // Calcular impacto basado en volumen
    const impactFactor = quantity / 1000000; // Factor arbitrario
    const priceImpact = marketData.price * impactFactor * 0.001;

    const newPrice =
      action === TRANSACTION_TYPE.BUY
        ? marketData.price + priceImpact
        : marketData.price - priceImpact;

    const change = newPrice - marketData.price;
    const changePercent = (change / marketData.price) * 100;

    marketData.price = newPrice;
    marketData.change = change;
    marketData.changePercent = changePercent;
    marketData.timestamp = new Date();

    // Actualizar asset también
    const asset = storage.assets.getAssetBySymbol(symbol);
    if (asset) {
      asset.currentPrice = newPrice;
      asset.lastUpdated = new Date();
      storage.assets.updateAsset(asset);
    }

    storage.marketData.updateMarketData(marketData);
  }

  // Generar ID único para transacciones
  protected generateTransactionId(): string {
    return "txn_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  }

  protected calculateData(
    quantity: number,
    executionPrice: number,
    type: TRANSACTION_TYPE
  ): { grossAmount: number; fees: number; totalCostOrNetAmount: number } {
    const grossAmount = quantity * executionPrice;
    const fees = this.calculateFees(grossAmount, type);
    const totalCostOrNetAmount = this.calculate(grossAmount, fees);

    return { grossAmount, fees, totalCostOrNetAmount };
  }

  protected abstract calculate(gA: number, f: number): number;

  protected async handleTransaction(
    transaction: Transaction,
    user: User,
    type: TRANSACTION_TYPE,
    executionPrice: number,
    totalCostOrNetAmount: number
  ): Promise<Transaction> {
    // Completar la transacción
    transaction.complete();

    // Actualizar balance del usuario
    TRANSACTION_TYPE.BUY
      ? user.deductBalance(totalCostOrNetAmount)
      : user.addBalance(totalCostOrNetAmount);
    storage.users.updateUser(user);

    // Actualizar portafolio
    this.updatePortfolio(
      transaction.userId,
      transaction.symbol,
      transaction.quantity,
      executionPrice
    );

    // Guardar transacción
    storage.transactions.addTransaction(transaction);

    // Simular volatilidad del mercado después de la operación
    this.simulateMarketImpact(transaction.symbol, transaction.quantity, type);

    return transaction;
  }

  protected abstract updatePortfolio(
    userId: string,
    symbol: string,
    quantity: number,
    price: number
  ): void;
}
