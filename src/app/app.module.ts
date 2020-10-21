import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateSyntaxModule} from './components/02.template-syntax/template-syntax.module';
import { TutolialTemplateSyntaxModule } from './components/03.tutolial-template-syntax/tutolial-template-syntax.module';
import { MethodEventModule } from './components/04.method-event/method-event.module';
import { ReactiveBindingModule } from './components/05.reactive-binding/reactive-binding.module';
import { TutolialMethodEventModule } from './components/06.tutolial-method-event/tutolial-method-event.module';

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
