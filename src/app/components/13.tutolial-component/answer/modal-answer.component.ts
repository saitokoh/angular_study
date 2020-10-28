import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-answer',
  template: `
  <div class="modal-background" [class.open]="isOpen" (click)="closeModal($event)"></div>
  <div class="modal" [class.open]="isOpen">
    <div class="modal-title">{{title}}<span (click)="closeModal($event)">×</span></div>
    <div class="modal-content">
      <ng-content></ng-content>
    </div>
    <div class="button-area">
      <button class="cancel-button" (click)="closeModal($event)">{{cancelButtonLabel}}</button>
      <button (click)="onExec($event)">{{execButtonLabel}}</button>
    </div>
  </div>
`,
  styleUrls: ["./style.scss"]
})
export class ModalAnswerComponent {
  @Input() isOpen: boolean;
  @Input() title: string;
  @Input() execButtonLabel: string;
  @Input() cancelButtonLabel: string;
  @Output() exec = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  closeModal = e => {
    this.close.emit(e);
  }

  onExec = e => {
    this.closeModal(e);
    this.exec.emit(e);
  }
}
