import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmitComponent } from './emit.component';
import { EmitChildrenModule } from './emit-children.module'

@NgModule({
  declarations: [
    EmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmitChildrenModule,
  ],
})
export class EmitModule { }
