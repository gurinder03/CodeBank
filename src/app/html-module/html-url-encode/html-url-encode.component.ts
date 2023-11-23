import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-url-encode',
  templateUrl: './html-url-encode.component.html',
  styleUrls: ['./html-url-encode.component.css']
})
export class HtmlUrlEncodeComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <p>Here is a quote from WWF's website:</p>
  
  <blockquote cite="http://www.worldwildlife.org/who/index.html">
  For 60 years, WWF has 
  </blockquote>

  <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>

  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

  <address>
    Written by John Doe.<br>
    Visit us at:<br>
    Example.com<br>
    Box 564, Disneyland<br>
    USA
  </address>

  <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>

  <bdo dir="rtl">This text will be written from right to left</bdo> 
  
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
