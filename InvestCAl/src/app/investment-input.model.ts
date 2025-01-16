export interface InvestmentInput {
    initialInvestment: number;
    annualInvestment: number;
    duration: number;
    expectedReturn: number;
  }

type InvestmentData = {
    initialInvestment: number;
    annualInvestment: number;
    duration: number;
    expectedReturn: number;
}