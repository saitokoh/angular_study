import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PropsComponent } from './props.component';
import { ChildrenModule } from './children.module'

@NgModule({
  declarations: [
    PropsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChildrenModule,
  ],
})
export class PropsModule { }
