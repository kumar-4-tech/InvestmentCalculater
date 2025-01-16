import { Component ,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {InvestmentInput} from '../investment-input.model'

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();


  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredDuration = '0';
  enteredExpectedReturn = '0';


  onSubmit() {
    console.log('submitted');
    this.calculate.emit({
      initialInvestment: + this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      duration: + this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn
  })

}
}
