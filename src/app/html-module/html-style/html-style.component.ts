import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-style',
  templateUrl: './html-style.component.html',
  styleUrls: ['./html-style.component.css']
})
export class HtmlStyleComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance
  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body style="background-color:powderblue;">
  
  <p>I am normal</p>
  <p style="color:red;font-family:courier;text-align:center;">I am red</p>
  <p style="color:blue;font-size:160%;text-align:center;">I am blue</p>
  <p style="font-size:50px;font-family:courier;">I am big</p>
  
  </body>
  </html>`;

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
