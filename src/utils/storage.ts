// Almacenamiento en memoria
import { transactionsF } from "./facade-models/transactions-f";
import { usersF } from "./facade-models/users-f";
import { assetsF } from "./facade-models/asssets-f";
import { ordersF } from "./facade-models/orders-f";
import { portfoliosF } from "./facade-models/prortfolios-f";
import { marketDataF } from "./facade-models/market-data-f";

// Base de datos simulada en memoria (se pierde al reiniciar)
class InMemoryStorage {
  private static instance: InMemoryStorage;

  public users = new usersF();
  public assets = new assetsF();
  public transactions = new transactionsF();
  public orders = new ordersF();
  public portfolios = new portfoliosF(this.users.getAllUsers());
  public marketData = new marketDataF();

  private constructor() {}

  static getInstance(): InMemoryStorage {
    if (!InMemoryStorage.instance) {
      InMemoryStorage.instance = new InMemoryStorage();
    }
    return InMemoryStorage.instance;
  }
}

// Exportar la instancia única (Singleton)
export const storage = InMemoryStorage.getInstance();
