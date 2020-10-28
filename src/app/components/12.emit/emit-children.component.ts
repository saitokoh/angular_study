import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'emit-children',
  template: `
  <form>
    <button type="button" (click)="save.emit($event)">Save</button>
  </form>
`,
})
export class EmitChildrenComponent {
  @Output() save = new EventEmitter<void>();
}
