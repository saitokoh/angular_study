// 汎用的なモーダルコンポーネントを作ってみよう
// 第1問
// 「モーダルオープン！」ボタンを押下時にモーダルが開くようにせよ
// ※moduleの設定を行う

// 第2問
// モーダルの下記要素を親から指定できるようにせよ
// モーダルタイトル
// キャンセルボタンラベル
// 登録ボタンラベル

// 第3問
// モーダルの中身を親から指定できるようにせよ

// 第4問
// モーダルの登録ボタンを押した時にexec関数を実行するようにせよ

import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
  <div>
    <button (click)="openModal()">モーダルオープン！</button>
    <!--
    <modal
      [isOpen]="isOpen"
      (close)="closeModal()"
    ></modal>
    -->
  </div>
`,
})
export class ParentComponent {
  isOpen: boolean = false;

  openModal = () => {
    this.isOpen = true;
  }

  closeModal = () => {
    this.isOpen = false;
  }

  exec = () => {
    alert("登録！");
  }
}
