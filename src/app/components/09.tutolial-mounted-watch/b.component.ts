// 第2問
// 入力した文字列と部分一致した本のタイトルを画面に表示せよ
// 文字列が入力されていない場合は、全ての本を表示せよ
// ※getterを使用して実装すること
import { Component } from '@angular/core';

@Component({
  selector: 'mounted-watch-b',
  template: `
  <div>
    タイトル：<input type="text" [(ngModel)]="searchTitle"/>
    <ul>
      <li>ここに検索後の本のリストを表示</li>
    </ul>
  </div>
  `,
})
export class MountedWatchBComponent {
  books: string[] = [
    '銀河鉄道の夜',
    '坊ちゃん',
    'ノルウェイの森',
    '海辺のカフカ',
    '容疑者Xの献身',
    'マスカレード・ホテル',
  ];
  searchTitle: string = '';
}
