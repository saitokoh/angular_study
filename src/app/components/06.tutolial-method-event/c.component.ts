// 第3問
// inputからフォーカスアウトしたら下記をチェックし、エラーメッセージを表示せよ
// 必須
// 10文字以内
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-c',
  template: `
  <div>
    <p>ニックネーム：<input type='text' (blur)="validate($event)"/></p>
    <p>{{errorMessage}}</p>
  </div>
  `,
})
export class MethodEventCComponent {
  errorMessage: string = ''
  validate = e => {
    const value = e.target.value;
    if (value === '') {
      this.errorMessage = '入力して下さい';
    } else if (value.length > 10) {
      this.errorMessage = '10文字以内で入力して下さい';
    } else {
      this.errorMessage = '';
    }
  }
}
