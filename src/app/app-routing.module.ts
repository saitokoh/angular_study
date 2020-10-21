import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './components/00.sample/sample.component'
import { StateComponent } from './components/01.state/state.component'
import { TemplateSyntaxComponent } from './components/02.template-syntax/template-syntax.component'
import { TemplateSyntaxAComponent } from './components/03.tutolial-template-syntax/a.component'
import { TemplateSyntaxBComponent } from './components/03.tutolial-template-syntax/b.component'
import { TemplateSyntaxCComponent } from './components/03.tutolial-template-syntax/c.component'
import { TemplateSyntaxDComponent } from './components/03.tutolial-template-syntax/d.component'
import { TemplateSyntaxAAnswerComponent } from './components/03.tutolial-template-syntax/a-answer.component'
import { TemplateSyntaxBAnswerComponent } from './components/03.tutolial-template-syntax/b-answer.component'
import { TemplateSyntaxCAnswerComponent } from './components/03.tutolial-template-syntax/c-answer.component'
import { TemplateSyntaxDAnswerComponent } from './components/03.tutolial-template-syntax/d-answer.component'
import { MethodEventComponent } from './components/04.method-event/method-event.component'
import { ReactiveBindingComponent } from './components/05.reactive-binding/reactive-binding.component'
import { MethodEventAComponent } from './components/06.tutolial-method-event/a.component'
import { MethodEventBComponent } from './components/06.tutolial-method-event/b.component'
import { MethodEventCComponent } from './components/06.tutolial-method-event/c.component'
import { MethodEventDComponent } from './components/06.tutolial-method-event/d.component'
import { MethodEventAAnswerComponent } from './components/06.tutolial-method-event/a-answer.component'
import { MethodEventBAnswerComponent } from './components/06.tutolial-method-event/b-answer.component'
import { MethodEventCAnswerComponent } from './components/06.tutolial-method-event/c-answer.component'
import { MethodEventDAnswerComponent } from './components/06.tutolial-method-event/d-answer.component'


const routes: Routes = [
  { path: "sample", component: SampleComponent},
  { path: "state", component: StateComponent },
  { path: "template-syntax", component: TemplateSyntaxComponent },
  { path: "template-syntax-a", component: TemplateSyntaxAComponent },
  { path: "template-syntax-b", component: TemplateSyntaxBComponent },
  { path: "template-syntax-c", component: TemplateSyntaxCComponent },
  { path: "template-syntax-d", component: TemplateSyntaxDComponent },
  { path: "template-syntax-a-answer", component: TemplateSyntaxAAnswerComponent },
  { path: "template-syntax-b-answer", component: TemplateSyntaxBAnswerComponent },
  { path: "template-syntax-c-answer", component: TemplateSyntaxCAnswerComponent },
  { path: "template-syntax-d-answer", component: TemplateSyntaxDAnswerComponent },
  { path: "method-event", component: MethodEventComponent },
  { path: "reactive-binding", component: ReactiveBindingComponent },
  { path: "method-event-a", component: MethodEventAComponent },
  { path: "method-event-b", component: MethodEventBComponent },
  { path: "method-event-c", component: MethodEventCComponent },
  { path: "method-event-d", component: MethodEventDComponent },
  { path: "method-event-a-answer", component: MethodEventAAnswerComponent },
  { path: "method-event-b-answer", component: MethodEventBAnswerComponent },
  { path: "method-event-c-answer", component: MethodEventCAnswerComponent },
  { path: "method-event-d-answer", component: MethodEventDAnswerComponent },
  { path: "", component: SampleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
