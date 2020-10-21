// 第1問
// Hello,に続いて、自分の名前を出力せよ (例：Hello, saikoh)
// 名前は変数に定義して、出力すること
import { Component } from '@angular/core';

@Component({
  selector: 'template-syntax-a-answer',
  template: `
  <div>
    <h1>Hello, {{ name }}</h1>
  </div>
  `,
})
export class TemplateSyntaxAAnswerComponent {
  name: string = "saito.kohei"
}
