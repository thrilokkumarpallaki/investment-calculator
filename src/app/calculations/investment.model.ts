export type Investment = {
    year: number;
    interest: number;
    ti: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}

export type NewInvestment = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}