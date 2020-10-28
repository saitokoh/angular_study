import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'computed-watch',
  template: `
  <div>
    <input type="text" [(ngModel)]="message"/>
  </div>
`,
})
export class ComputedWatchComponent implements DoCheck{
  message: string = "";
  private oldMessage: string = "";

  get reversedMessage() {
    console.log('リバースメッセージ再計算');
    return this.message.split('').reverse().join('');
  }

  ngDoCheck() {
    if (this.message !== this.oldMessage) {
      alert("change message!!");
      this.oldMessage = this.message;
    }
  }
}
