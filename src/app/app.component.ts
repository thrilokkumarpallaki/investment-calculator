import { Component } from '@angular/core';
import { CalculationsComponent } from './calculations/calculations.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvestmentFormComponent, CalculationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
}
