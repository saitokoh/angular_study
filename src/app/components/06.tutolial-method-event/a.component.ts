// 第1問
// ボタンをクリックしたらalertで「くりっく！」と表示せよ
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-a',
  template: `
  <div>
    <button (click)="handleClick()">ボタン</button>
  </div>
  `,
})
export class MethodEventAComponent {
  handleClick = () => {
    alert('くりっく！');
  }
}
