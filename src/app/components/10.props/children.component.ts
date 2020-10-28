import { Component, Input } from '@angular/core';

@Component({
  selector: 'children',
  template: `
  <h1>{{ title }}</h1>
`,
})
export class ChildrenComponent {
  @Input() title: string;
}
