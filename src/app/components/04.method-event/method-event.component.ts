import { Component } from '@angular/core';

@Component({
  selector: 'template-syntax',
  template: `
  <button (click)="sayHello()">
    Click me
  </button>
`,
})
export class MethodEventComponent {
  name: string = 'saikoh';

  sayHello = () => {
    alert(`Hello, ${this.name}!`);
  }
}
