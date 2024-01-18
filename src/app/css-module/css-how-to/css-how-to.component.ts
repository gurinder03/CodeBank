import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/css.json';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'app-css-how-to',
  templateUrl: './css-how-to.component.html',
  styleUrls: ['./css-how-to.component.css']
})
export class CssHowToComponent {

  sidebar: any = jsonData

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <h1 style="color:blue;text-align:center;">This is a heading</h1>
  <p style="color:red;">This is a paragraph.</p>
  
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
