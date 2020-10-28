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
      <p>Todo入力：<input type='text' [(ngModel)]="editingTodo" (keyup.enter)="addTodo()"/></p>
      <p>{{errorMessage}}</p>
      <ul>
        <li *ngFor="let todo of todos.reverse()">
          {{todo}}
        </li>
      </ul>
    </div>
  `,
})
export class MethodEventDComponent {
  todos: string[] = [];
  errorMessage: string = '';
  editingTodo: string = '';

  addTodo = () => {
    if (this.validate()) {
      this.todos.push(this.editingTodo);
      this.editingTodo = '';
    }
  }

  validate = () => {
    if (this.editingTodo === '') {
      this.errorMessage = '入力して下さい';
      return false;
    } else if (this.editingTodo.length > 10) {
      this.errorMessage = '10文字以内で入力して下さい';
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}
