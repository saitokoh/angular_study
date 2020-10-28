import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalAnswerComponent } from './modal-answer.component';

@NgModule({
  declarations: [
    ModalAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [ModalAnswerComponent]
})
export class ModalAnswerModule { }
