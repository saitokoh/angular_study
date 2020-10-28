// 第1問
// このページを開くたびに、1～10のランダムな数字が出力されるようにせよ
import { Component } from '@angular/core';

@Component({
  selector: 'mounted-watch-a',
  template: `
  <div>
    {{number}}
  </div>
  `,
})
export class MountedWatchAComponent {
  number: number;
}
