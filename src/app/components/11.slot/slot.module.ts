import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SlotComponent } from './slot.component';
import { SlotChildrenModule } from './slot-children.module'

@NgModule({
  declarations: [
    SlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlotChildrenModule,
  ],
})
export class SlotModule { }
