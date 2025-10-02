import { config } from "../../config/config";
import { Asset } from "../../models/asset";

export class assetsF {
  private assets: Map<string, Asset> = new Map();

  constructor() {
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Activos por defecto
    config.market.baseAssets.forEach((baseAsset) => {
      const asset = new Asset(
        baseAsset.symbol,
        baseAsset.name,
        baseAsset.basePrice,
        baseAsset.sector
      );
      this.assets.set(baseAsset.symbol, asset);
    });
  }

  // Métodos para activos
  getAllAssets(): Asset[] {
    return Array.from(this.assets.values());
  }

  getAssetBySymbol(symbol: string): Asset | undefined {
    return this.assets.get(symbol);
  }

  updateAsset(asset: Asset): void {
    this.assets.set(asset.symbol, asset);
  }
}
