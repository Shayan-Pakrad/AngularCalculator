import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {

  digit(d:string) {

    this.currentValue = this.currentValue + d;

    if (d != '.') {
      this.currentValue = Number(this.currentValue).toString();
    }
    
  }

  operator(o:string) {
    this.currentOperator = o;
    this.previousValue = this.currentValue;
    this.currentValue = '0';
  }

  equal() {
    const a:number = Number(this.currentValue);
    const b:number = Number(this.previousValue);
    let result:number = 0;

    switch (this.currentOperator) {
      case '+':
        result = a + b;
        break;

      case '-':
        result = a - b;
        break;

      case '/':
        result = a / b;
        break;

      case 'x':
        result = a * b;
        break;
    
      default:
        break;
    }

    this.currentValue = result.toString()
  }

  previousValue: string = '0';
  currentValue: string = '0';
  currentOperator: string = '';
}
