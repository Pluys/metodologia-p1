import { Portfolio } from "../../models/portfolio";
import { User } from "../../models/user";

export class portfoliosF {
  private portfolios: Map<string, Portfolio> = new Map();

  constructor(users: User[]) {
    this.initalizeDefaultData(users);
  }

  private initalizeDefaultData(users: User[]) {
    // Portafolios iniciales vacíos
    users.forEach((user) => {
      const portfolio = new Portfolio(user.id);
      this.portfolios.set(user.id, portfolio);
    });
  }

  // Métodos para portafolios
  getPortfolioByUserId(userId: string): Portfolio | undefined {
    return this.portfolios.get(userId);
  }

  updatePortfolio(portfolio: Portfolio): void {
    this.portfolios.set(portfolio.userId, portfolio);
  }
}
