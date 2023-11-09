import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'app-html-elements',
  templateUrl: './html-elements.component.html',
  styleUrls: ['./html-elements.component.css']
})
export class HtmlElementsComponent implements OnInit {

  sidebar: any = jsonData
  
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
  
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
