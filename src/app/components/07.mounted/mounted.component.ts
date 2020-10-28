import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mounted',
  template: `
  <div>
    {{name}}
  </div>
`,
})
export class MountedComponent implements OnInit {
  name: string = "saito.kohei"
  
  ngOnInit() {
    alert(this.name);
  }
}
