// 第1問
// このページを開くたびに、1～10のランダムな数字が出力されるようにせよ
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mounted-watch-a',
  template: `
  <div>
    {{number}}
  </div>
  `,
})
export class MountedWatchAAnswerComponent implements OnInit {
  number: number;

  ngOnInit() {
    this.number = Math.floor(Math.random()*10);
  }
}
