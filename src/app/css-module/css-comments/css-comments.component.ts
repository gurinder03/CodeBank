import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/css.json';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'app-css-comments',
  templateUrl: './css-comments.component.html',
  styleUrls: ['./css-comments.component.css']
})
export class CssCommentsComponent {

  sidebar: any = jsonData

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance

  defaultHtml = `<!DOCTYPE html>
  <html>
  <head>
  <style>
  /* This is a single-line comment */
  .world{
    color: red;  /*blue*/ /* Set text color to red */
  } 
  /* This is
  a multi-line
  comment */
  </style>
  </head>
  <body>
  <!-- These paragraphs will be red -->
  <p class="world">Hello World!</p>
  <p class="world">This paragraph is styled with CSS.</p>
  <p class="world">CSS comments are not shown in the output.</p>
  
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
