import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-block-inline',
  templateUrl: './html-block-inline.component.html',
  styleUrls: ['./html-block-inline.component.css']
})
export class HtmlBlockInlineComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <p style="border: 1px solid black">Hello World</p>
  <div style="border: 1px solid black">Hello World</div>
  
  <p>The P and the DIV elements are both block elements.</p>
  
<p>This is an inline span <span style="border: 1px solid black">Hello World</span> </p>

<p>The SPAN element is an inline element, and will not start 
on a new line and only takes up as much width as necessary.</p>

<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England. .</p>
  <p>Standing on the River Thames, London has been a major settlement......</p>
</div> 
<p>My mother has <span style="color:blue;">blue</span> eyes and my father has dark green eyes.</p>
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
