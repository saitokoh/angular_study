// 第1問
// ボタンをクリックしたらalertで「くりっく！」と表示せよ
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-a-answer',
  template: `
  <div>
    <button (click)="showAlert()">ボタン</button>
  </div>
  `,
})
export class MethodEventAAnswerComponent {
  showAlert = () => {
    alert('くりっく！')
  }
}
