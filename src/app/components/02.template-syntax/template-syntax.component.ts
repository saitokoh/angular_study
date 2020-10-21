import { Component } from '@angular/core';

@Component({
  selector: 'template-syntax',
  templateUrl: './template-syntax.component.html',
})
export class TemplateSyntaxComponent {
  name: string = 'saikoh';
  link: string = 'https://uriho.jp';
  items: object[] = [{title: 'title1', key: 1 },
    { title: 'title2', key: 2 }]
  isActive: boolean = true
  isShow: boolean = false
}
