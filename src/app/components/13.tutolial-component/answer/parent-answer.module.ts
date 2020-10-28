import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ParentAnswerComponent } from './parent-answer.component';
import { ModalAnswerModule } from './modal-answer.module';

@NgModule({
  declarations: [
    ParentAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalAnswerModule,
  ],
})
export class ParentAnswerModule { }
