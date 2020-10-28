import { Component } from '@angular/core';

@Component({
  selector: 'emit',
  template: `
  <div>
    <emit-children (save)='handleSave($event)'></emit-children>
  </div>
`,
})
export class EmitComponent {
  handleSave = e => {
    alert("save");
  }
}
