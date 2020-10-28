import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmitChildrenComponent } from './emit-children.component';

@NgModule({
  declarations: [
    EmitChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [EmitChildrenComponent]
})
export class EmitChildrenModule { }
