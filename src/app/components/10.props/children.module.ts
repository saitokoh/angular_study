import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChildrenComponent } from './children.component';

@NgModule({
  declarations: [
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [ChildrenComponent]
})
export class ChildrenModule { }
