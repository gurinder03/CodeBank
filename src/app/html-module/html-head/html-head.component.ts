import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-head',
  templateUrl: './html-head.component.html',
  styleUrls: ['./html-head.component.css']
})
export class HtmlHeadComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <head>
    <title>A Meaningful Page Title</title>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mystyle.css">
    <style>
      p.text {color: blue;}
    </style>

    <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello JavaScript!";
    }
    </script>
  </head>
  <body>
  <p class="text">The content of the body element is displayed in the browser window.</p>
  <p class=""text>The content of the title e.</p>
  

  

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
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
