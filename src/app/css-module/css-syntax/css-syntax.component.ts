import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/css.json';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'app-css-syntax',
  templateUrl: './css-syntax.component.html',
  styleUrls: ['./css-syntax.component.css']
})
export class CssSyntaxComponent {
  sidebar: any = jsonData

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance

  defaultHtml = `<!DOCTYPE html>
  <html>
  <head>
  <style>
  .p {
    color: red;
    text-align: center;
  } 
  </style>
  </head>
  <body>
  
  <p class="p">Hello World!</p>
  <p class="p">These paragraphs are styled with CSS.</p>
  
  </body>
  </html>
  `;

 

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
