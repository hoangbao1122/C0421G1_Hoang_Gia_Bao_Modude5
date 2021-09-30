import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;

  results: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }


  result(so1: number, so2: number, operator: string): number {
    // @ts-ignore
    so1 = parseInt(this.number1);
    // @ts-ignore
    so2 = parseInt((this.number2));

    switch (operator) {
      case "+": {
        return this.results = so1 + so2;
        break;
      }
      case "-": {
        return this.results = so1 - so2;
        break;
      }
      case "*": {
        return this.results = so1 * so2;
        break;
      }
      case "/": {
        return this.results = so1 / so2;
        break;
      }
    }
    return this.results
  }
}
