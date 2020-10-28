import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateSyntaxModule} from './components/02.template-syntax/template-syntax.module';
import { TutolialTemplateSyntaxModule } from './components/03.tutolial-template-syntax/tutolial-template-syntax.module';
import { MethodEventModule } from './components/04.method-event/method-event.module';
import { ReactiveBindingModule } from './components/05.reactive-binding/reactive-binding.module';
import { TutolialMethodEventModule } from './components/06.tutolial-method-event/tutolial-method-event.module';
import { MountedModule } from './components/07.mounted/mounted.module';
import { ComputedWatchModule } from './components/08.computed-watch/computed-watch.module';
import { TutolialMountedWatchModule } from './components/09.tutolial-mounted-watch/tutolial-mounted-watch.module';
import { PropsModule } from './components/10.props/props.module';
import { SlotModule } from './components/11.slot/slot.module';
import { EmitModule } from './components/12.emit/emit.module';
import { ParentModule } from './components/13.tutolial-component/parent.module';
import { ParentAnswerModule } from './components/13.tutolial-component/answer/parent-answer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
