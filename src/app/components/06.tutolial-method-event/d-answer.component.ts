// 第4問
// inputを入力しEnterキーが押されたら、下記validationを行う。OKならtodosに追加せよ
// todosはリストで表示せよ
// 必須
// 10文字以内
import { Component } from '@angular/core';

@Component({
  selector: 'method-event-d-answer',
  template: `
    <div>
      <p>Todo入力：<input type='text' [(ngModel)]="writingTodo" (keyup.enter)="addTodo()"/></p>
      <p>{{errorMessage}}</p>
      <ul>
        <li *ngFor="let todo of todos.reverse()">
          {{todo}}
        </li>
      </ul>
    </div>
  `,
})
export class MethodEventDAnswerComponent {
  todos: string[] = [];
  writingTodo: string = '';
  errorMessage: string = '';

  addTodo = () => {
    if (this.validate()) {
      this.todos.push(this.writingTodo);
      this.writingTodo = '';
    }
  }

  validate = (): boolean => {
    if (this.writingTodo === '') {
      this.errorMessage = 'Todoを入力して下さい';
      return false;
    } else if (this.writingTodo.length > 10) {
      this.errorMessage = 'Todoは10文字以内で入力して下さい';
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}
