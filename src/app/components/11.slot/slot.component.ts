import { Component } from '@angular/core';

@Component({
  selector: 'slot',
  template: `
  <div>
    <slot-children>
      <span style='color:red;'>Title</span>
    </slot-children>
  </div>
`,
})
export class SlotComponent {
}
