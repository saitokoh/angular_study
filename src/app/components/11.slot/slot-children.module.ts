import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SlotChildrenComponent } from './slot-children.component';

@NgModule({
  declarations: [
    SlotChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [SlotChildrenComponent]
})
export class SlotChildrenModule { }
