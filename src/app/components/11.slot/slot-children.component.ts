import { Component } from '@angular/core';

@Component({
  selector: 'slot-children',
  template: `
  <h1>
    <ng-content></ng-content>
  </h1>
`,
})
export class SlotChildrenComponent {
}
