// 第3問
// 入力した文字列と部分一致した本のタイトルを画面に表示せよ
// 文字列が入力されていない場合は、全ての本を表示せよ
// ※ngDoCheckを使用して実装すること
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'mounted-watch-c-answer',
  template: `
  <div>
    タイトル：<input type="text" [(ngModel)]="searchTitle"/>
    <ul>
      <li *ngFor="let book of searchedBooks">{{book}}</li>
    </ul>
  </div>
  `,
})
export class MountedWatchCAnswerComponent implements DoCheck {
  books: string[] = [
    '銀河鉄道の夜',
    '坊ちゃん',
    'ノルウェイの森',
    '海辺のカフカ',
    '容疑者Xの献身',
    'マスカレード・ホテル',
  ];
  searchTitle: string = '';
  private oldSearchTitle: string = '';
  searchedBooks: string[] = this.books;

  ngDoCheck() {
    if (this.searchTitle !== this.oldSearchTitle) {
      this.oldSearchTitle = this.searchTitle;
      if (this.searchTitle) {
        this.searchedBooks = this.books.filter(book => book.includes(this.searchTitle));
      } else {
        this.searchedBooks = this.books;
      }
    }
  }
}