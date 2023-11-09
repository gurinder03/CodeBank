import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-formatting',
  templateUrl: './html-formatting.component.html',
  styleUrls: ['./html-formatting.component.css'],
})
export class HtmlFormattingComponent implements OnInit {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  sidebar: any = jsonData;
  private cm: any; // CodeMirror instance
  defaultHtml = `<html>
  <body>
  
  <b>This text is bold</b><br>
  <strong>This text is important!</strong><br>
  <i>This text is italic</i><br>
  <em>This text is emphasized</em><br>
  <small>This is some smaller text.</small><br>
  <p>Do not forget to buy <mark>milk</mark> today.</p><br>
  <p>My favorite color is <del>blue</del> red.</p><br>
  <p>My favorite color is <del>blue</del> <ins>red</ins>.</p><br>
  <p>This is <sub>subscripted</sub> text.</p><br>
  <p>This is <sup>superscripted</sup> text.</p><br>
  
  </body>
  </html>
  `;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cm = CodeMirror.fromTextArea(this.codeEditor.nativeElement, {
      mode: 'htmlmixed',
      theme: 'material',
      value: this.defaultHtml,
    });
    this.cm.getDoc().setValue(this.defaultHtml);
  }

  runCode() {
    const code = this.cm.getValue();
    const outputContainer = this.outputContainer.nativeElement;
    outputContainer.innerHTML = code;
  }
}
