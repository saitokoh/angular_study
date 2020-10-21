// 第2問
// ボタンをクリックしたら、カウントアップせよ
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-b-answer',
  template: `
  <div>
    <p>カウント：{{count}}</p>
    <button (click)="incrementCount()">ボタン</button>
  </div>
  `,
})
export class MethodEventBAnswerComponent {
  count: number = 0;

  incrementCount = () => {
    this.count++
  }
}
