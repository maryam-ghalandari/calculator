import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  prev: string = '0';
  current: string = '0';
  op: string = '';
  memory: number = 0;
  isPercentage: boolean = false;


  digit(d: string) {
    this.current = Number(this.current + d).toString();
  }
  operator(o: string) {
    if (this.current !== '') {
      if (o === '%') {
        this.isPercentage = true;
      } else {
        this.prev = this.current;
        this.current = '0';
        this.op = o;
        this.isPercentage = false;
      }
    }
  }
  equal() {
    let a = Number(this.prev);
    let b = Number(this.current);
    switch (this.op) {
      case '+':
        this.current = (a + b).toString();
        break;
      case '-':
        this.current = (a - b).toString();
        break;
      case '*':
        this.current = (a * b).toString();
        break;
      case '/':
        this.current = (a / b).toString();
        break;
      case '^':
        this.current = Math.pow(a, b).toString();
        break;
      case 'x³':
        this.current = Math.pow(b, 3).toString();
        break;
      case '√':
        this.current = Math.sqrt(b).toString();
        break;
      case '%':
        this.current = ((a * b) / 100).toString();
        break;
      default:
        break;
    }
  }
  clearEntry() {
    this.current = '0';
  }
  clear() {
    this.current = '0';
    this.prev = '0';
    this.op = '';
  }
  addToMemory() {
    this.memory += Number(this.current);
    this.current = '0';
  }
  subtractFromMemory() {
    this.memory -= Number(this.current);
    this.current = '0';
  }
  sin() {
    const angle = parseFloat(this.current);
    if (!isNaN(angle)) {
      this.current = Math.sin(angle).toString();
    } else {
      this.current = 'Error';
    }
  }

  cos() {
    const angle = parseFloat(this.current);
    if (!isNaN(angle)) {
      this.current = Math.cos(angle).toString();
    } else {
      this.current = 'Error';
    }
  }

  tan() {
    const angle = parseFloat(this.current);
    if (!isNaN(angle)) {
      this.current = Math.tan(angle).toString();
    } else {
      this.current = 'Error';
    }
  }

  log() {
    const num = parseFloat(this.current);
    if (!isNaN(num) && num > 0) {
      this.current = Math.log(num).toString();
    } else {
      this.current = 'Error';
    }
  }

}
