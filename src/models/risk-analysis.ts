import { RISK } from "./types";

export class RiskAnalysis {
  userId: string;
  portfolioRisk: RISK;
  diversificationScore: number;
  recommendations: string[];
  calculatedAt: Date;

  constructor(userId: string) {
    this.userId = userId;
    (this.portfolioRisk = RISK.MEDIUM), (this.diversificationScore = 0);
    this.recommendations = [];
    this.calculatedAt = new Date();
  }

  updateRisk(
    risk: RISK,
    diversificationScore: number,
    recommendations: string[]
  ): void {
    this.portfolioRisk = risk;
    this.diversificationScore = diversificationScore;
    this.recommendations = recommendations;
    this.calculatedAt = new Date();
  }
}
