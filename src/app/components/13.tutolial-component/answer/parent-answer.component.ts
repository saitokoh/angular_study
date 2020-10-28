import { Component } from '@angular/core';

@Component({
  selector: 'parent-answer',
  template: `
  <div>
    <button (click)="openModal()">モーダルオープン！</button>
    <modal-answer
      [title]="'ユーザー登録'"
      [execButtonLabel]="'登録'"
      [cancelButtonLabel]="'キャンセル'"
      [isOpen]="isOpen"
      (close)="closeModal()"
      (exec)="exec()"
    >
      <p>ユーザーを登録しますか？</p>
    </modal-answer>
  </div>
`,
})
export class ParentAnswerComponent {
  isOpen: boolean = false;

  openModal = () => {
    this.isOpen = true;
  }

  closeModal = () => {
    this.isOpen = false;
  }

  exec = () => {
    alert("登録しました。");
  }
}
