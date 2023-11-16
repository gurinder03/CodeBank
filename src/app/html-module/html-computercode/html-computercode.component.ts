import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-computercode',
  templateUrl: './html-computercode.component.html',
  styleUrls: ['./html-computercode.component.css']
})
export class HtmlComputercodeComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <h2>Computer Code</h2>
  <p>Some programming code:</p>
 
  <code>
  x = 5;
  y = 6;
  z = x + y;
  </code>
  <p>Save the document by pressing <kbd>Ctrl + S</kbd></p>
  <p><samp>File not found.<br>Press F1 to continue</samp></p>

  <p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, 
  where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>
  </body>
  </html>`;

  ngAfterViewInit() {
    this.cm = CodeMirror.fromTextArea(this.codeEditor.nativeElement, {
      mode: 'htmlmixed',
      theme: 'material',
      value: this.defaultHtml,
    });
    this.cm.getDoc().setValue(this.defaultHtml);
  }

  runCode() {
    this.htmlVal = this.cm.getValue();
    const outputContainer = this.outputContainer.nativeElement;
    outputContainer.innerHTML = this.htmlVal;
  }

}
