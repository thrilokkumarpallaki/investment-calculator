import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationsService } from './calculations.service';

@Component({
  selector: 'app-calculations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculations.component.html',
  styleUrl: './calculations.component.css'
})
export class CalculationsComponent {
  private calculationService = inject(CalculationsService);

  get investmentResults() {
    return this.calculationService.getInvestments();
  }
}
