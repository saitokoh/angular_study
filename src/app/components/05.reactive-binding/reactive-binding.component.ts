import { Component } from '@angular/core';

@Component({
  selector: 'template-syntax',
  template: `
  <div>
    <input type="text" [(ngModel)]="name"><br>
    {{name}}
  </div>
`,
})
export class ReactiveBindingComponent {
  name: string = 'saikoh';
}
