import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css'],
})
export class HtmlComponent implements OnInit {
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  sidebar: any = jsonData
  private cm: any; // CodeMirror instance
  defaultHtml = `<!DOCTYPE html>
  <html>
  <head>
  <title>Page Title</title>
  </head>
  <body>
  
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
  
  </body>
  </html>`;

  constructor() {
  }

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
    console.log(this.cm.getValue());
    const outputContainer = this.outputContainer.nativeElement;
    outputContainer.innerHTML = code;
  }
}
