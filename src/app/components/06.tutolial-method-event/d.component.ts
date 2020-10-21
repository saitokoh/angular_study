// 第4問
// inputを入力しEnterキーが押されたら、下記validationを行う。OKならtodosに追加せよ
// todosはリストで表示せよ
// 必須
// 10文字以内
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-d',
  template: `
    <div>
      <p>Todo入力：<input type='text'/></p>
      <p>エラーメッセージはここ</p>
      <ul>
        <li>ここにTodoを出す</li>
      </ul>
    </div>
  `,
})
export class MethodEventDComponent {
  todos: string[] = [];
}
