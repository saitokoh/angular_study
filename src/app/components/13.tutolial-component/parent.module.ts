import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class ParentModule { }
