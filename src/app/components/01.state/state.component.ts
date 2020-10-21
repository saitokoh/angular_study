import { Component } from '@angular/core';

@Component({
  selector: 'state',
  template: `<div>{{ count }}</div>`,
})
export class StateComponent {
  count: number = 0;
  todos: string[];
  user: object = {
    name: '',
    email: ''
  };
}
