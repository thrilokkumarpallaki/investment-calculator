import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculationsService } from '../calculations/calculations.service';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css'
})
export class InvestmentFormComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;

  private calculationService = inject(CalculationsService);
  
  onSubmit() {
    this.calculationService.calculateInvestmentResults({'initialInvestment': this.initialInvestment,
    'annualInvestment': this.annualInvestment,
    'expectedReturn': this.expectedReturn,
    'duration': this.duration});
  }
}
