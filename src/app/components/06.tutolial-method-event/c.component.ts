// 第3問
// inputからフォーカスアウトしたら下記をチェックし、エラーメッセージを表示せよ
// 必須
// 10文字以内
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-c',
  template: `
  <div>
    <p>ニックネーム：<input type='text'/></p>
    <p>エラーメッセージはここ</p>
  </div>
  `,
})
export class MethodEventCComponent {
}
