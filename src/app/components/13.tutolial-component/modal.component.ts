import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
  <div class="modal-background" [class.open]="isOpen" (click)="closeModal($event)"></div>
  <div class="modal" [class.open]="isOpen">
    <div class="modal-title">モーダルタイトル<span (click)="closeModal($event)">×</span></div>
    <div class="modal-content">
      モーダルの中身
    </div>
    <div class="button-area">
      <button class="cancel-button" (click)="closeModal($event)">キャンセルボタンラベル</button>
      <button >実行ボタンラベル</button>
    </div>
  </div>
`,
  styleUrls: ["./style.scss"]
})
export class ModalComponent {
  @Input() isOpen: boolean;
  @Output() close = new EventEmitter<void>();

  closeModal = e => {
    this.close.emit(e);
  }
}
