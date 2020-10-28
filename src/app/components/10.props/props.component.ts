import { Component } from '@angular/core';

@Component({
  selector: 'props',
  template: `
  <div>
    <children [title]='title'></children>
  </div>
`,
})
export class PropsComponent {
  title: string = "Title";
}
