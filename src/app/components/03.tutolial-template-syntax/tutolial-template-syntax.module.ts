import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemplateSyntaxAComponent } from './a.component';
import { TemplateSyntaxBComponent } from './b.component';
import { TemplateSyntaxCComponent } from './c.component';
import { TemplateSyntaxDComponent } from './d.component';
import { TemplateSyntaxAAnswerComponent } from './a-answer.component';
import { TemplateSyntaxBAnswerComponent } from './b-answer.component';
import { TemplateSyntaxCAnswerComponent } from './c-answer.component';
import { TemplateSyntaxDAnswerComponent } from './d-answer.component';

@NgModule({
  declarations: [
    TemplateSyntaxAComponent,
    TemplateSyntaxBComponent,
    TemplateSyntaxCComponent,
    TemplateSyntaxDComponent,
    TemplateSyntaxAAnswerComponent,
    TemplateSyntaxBAnswerComponent,
    TemplateSyntaxCAnswerComponent,
    TemplateSyntaxDAnswerComponent,
  ],
  imports: [
    BrowserModule,
  ],
})
export class TutolialTemplateSyntaxModule { }
