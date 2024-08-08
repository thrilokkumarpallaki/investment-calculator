import { Injectable } from '@angular/core';
import { type Investment, type NewInvestment } from './investment.model';
@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  annualData: Investment[] = [];

  constructor() {
    const annualData = localStorage.getItem('annualData');

    if (annualData !== null) {
      this.annualData = JSON.parse(annualData);
    }
   }

  calculateInvestmentResults(newInvestment: NewInvestment) {
    const duration: number = newInvestment.duration;
    let investmentValue: number = newInvestment.initialInvestment;
    const expectedReturn: number = newInvestment.expectedReturn;
    const annualInvestment: number = newInvestment.annualInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = newInvestment.initialInvestment * (expectedReturn / 100);
      investmentValue += interestEarnedInYear;
      const totalInterest = investmentValue - annualInvestment * year - newInvestment.initialInvestment;

      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        ti: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: newInvestment.initialInvestment + annualInvestment * year,
      });

      localStorage.setItem('annualData', JSON.stringify(this.annualData));
    }
  }

  getInvestments(): Investment[] {
    return this.annualData;
  }

}
