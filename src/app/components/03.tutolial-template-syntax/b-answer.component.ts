// 第2問
// inputに自分の名前が入力された状態で表示せよ
// 名前は変数に定義して、出力すること
import { Component } from '@angular/core';

@Component({
  selector: 'template-syntax-b-answer',
  template: `
  <div>
    <input type='text' [value]="name"/>
  </div>
  `,
})
export class TemplateSyntaxBAnswerComponent {
  name: string = "saito.kohei"
}
