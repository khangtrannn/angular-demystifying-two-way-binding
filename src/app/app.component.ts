import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterFuckounterComponent } from './counter-fuckounter.component';

/**
 * [(ngModel)] is the shorthand of input and output
 * [ngModel]="someValue" (ngModelChange)="onValueChange($event)"
 * 
 * Let's try to figure out what exactly makes this short two-way data binding syntax possible
 * Follow one simple convention there should be an input, output pair where the name of the input
 * can be any string but the name of the output should have "the name of input" + "change" suffix
 */

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <img width="150"src="https://www.decodedfrontend.io/wp-content/uploads/2021/01/icon.png" alt="Decoded Frontend">
    <h1>Demystifying <br> 2-Way-Databinding</h1>
    <!-- <input [(ngModel)]="inputValue" type="text"> -->

    <app-counter-fuckounter [(startFrom)]="counterValue"></app-counter-fuckounter> 
    <div class="count-value">Counter value: <b>{{counterValue}}</b></div>
  `,
  imports: [FormsModule, CommonModule, CounterFuckounterComponent],
  styles: [`
    .counter-value {
      margin-bottom: 20px;
    }

    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: #003b4a;
      color: white;
      text-align: center;
    }
  `]
})
export class AppComponent {
  // inputValue = "Khang";
  counterValue = 9;
}