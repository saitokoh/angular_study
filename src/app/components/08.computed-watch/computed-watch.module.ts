import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ComputedWatchComponent } from './computed-watch.component';

@NgModule({
  declarations: [
    ComputedWatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class ComputedWatchModule { }
