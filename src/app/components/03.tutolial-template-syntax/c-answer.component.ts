// 第3問
// isActiveがtrueなら「あたり」、falseなら「はずれ」とpタグで表示する処理を完成させよ
// v-ifでもv-showでもどっちのパターンでもおｋ
import { Component } from '@angular/core';

@Component({
  selector: 'template-syntax-c-answer',
  template: `
  <div>
    <p *ngIf="isActive; else elseContent">あたり</p>
    <ng-template #elseContent>
      <p>はずれ</p>
    </ng-template>
  </div>
  `,
})
export class TemplateSyntaxCAnswerComponent {
  isActive: boolean = true
}
