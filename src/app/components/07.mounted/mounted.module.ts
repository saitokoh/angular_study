import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MountedComponent } from './mounted.component';

@NgModule({
  declarations: [
    MountedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class MountedModule { }
