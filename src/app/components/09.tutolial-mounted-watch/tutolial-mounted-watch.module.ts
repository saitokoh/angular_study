import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MountedWatchAComponent } from './a.component';
import { MountedWatchBComponent } from './b.component';
import { MountedWatchCComponent } from './c.component';
import { MountedWatchAAnswerComponent } from './a-answer.component';
import { MountedWatchBAnswerComponent } from './b-answer.component';
import { MountedWatchCAnswerComponent } from './c-answer.component';

@NgModule({
  declarations: [
    MountedWatchAComponent,
    MountedWatchBComponent,
    MountedWatchCComponent,
    MountedWatchAAnswerComponent,
    MountedWatchBAnswerComponent,
    MountedWatchCAnswerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class TutolialMountedWatchModule { }
