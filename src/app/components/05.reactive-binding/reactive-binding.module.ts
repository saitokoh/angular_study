import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveBindingComponent } from './reactive-binding.component';

@NgModule({
  declarations: [
    ReactiveBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class ReactiveBindingModule { }
