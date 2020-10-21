import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MethodEventAComponent } from './a.component';
import { MethodEventBComponent } from './b.component';
import { MethodEventCComponent } from './c.component';
import { MethodEventDComponent } from './d.component';
import { MethodEventAAnswerComponent } from './a-answer.component';
import { MethodEventBAnswerComponent } from './b-answer.component';
import { MethodEventCAnswerComponent } from './c-answer.component';
import { MethodEventDAnswerComponent } from './d-answer.component';

@NgModule({
  declarations: [
    MethodEventAComponent,
    MethodEventBComponent,
    MethodEventCComponent,
    MethodEventDComponent,
    MethodEventAAnswerComponent,
    MethodEventBAnswerComponent,
    MethodEventCAnswerComponent,
    MethodEventDAnswerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class TutolialMethodEventModule { }
