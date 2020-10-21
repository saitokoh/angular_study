// 第2問
// ボタンをクリックしたら、カウントアップせよ
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-b',
  template: `
  <div>
    <p>カウント：{{count}}</p>
    <button>ボタン</button>
  </div>
  `,
})
export class MethodEventBComponent {
  count: number = 0;
}
