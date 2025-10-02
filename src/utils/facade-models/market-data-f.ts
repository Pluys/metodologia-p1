import { MarketData } from "../../models/market-data";
import { config } from "../../config/config";

export class marketDataF {
  private marketData: Map<string, MarketData> = new Map();

  constructor() {
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Datos de mercado iniciales
    config.market.baseAssets.forEach((baseAsset) => {
      const marketData = new MarketData(baseAsset.symbol, baseAsset.basePrice);
      this.marketData.set(baseAsset.symbol, marketData);
    });
  }

  // Métodos para datos de mercado
  getAllMarketData(): MarketData[] {
    return Array.from(this.marketData.values());
  }

  getMarketDataBySymbol(symbol: string): MarketData | undefined {
    return this.marketData.get(symbol);
  }

  updateMarketData(data: MarketData): void {
    this.marketData.set(data.symbol, data);
  }
}
