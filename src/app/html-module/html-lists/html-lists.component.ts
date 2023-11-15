import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-lists',
  templateUrl: './html-lists.component.html',
  styleUrls: ['./html-lists.component.css']
})
export class HtmlListsComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  
     <head>
        <title>HTML Lists</title>
     </head>
    
     <body>
        <ul>
           <li>Beetroot</li>
           <li>Ginger</li>
           <li>Potato</li>
           <li>Radish</li>
        </ul>
        <ul type = "square">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ul>
        <ul type = "disc">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ul>
        <ul type = "circle">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ul>

        <ol>
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ol>
        <ol type = "1">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ol>
        <ol type = "I">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ol>
        <ol type = "i">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ol>
        <ol type = "A">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ol>
        <ol type = "i" start = "4">
          <li>Beetroot</li>
          <li>Ginger</li>
          <li>Potato</li>
          <li>Radish</li>
        </ol>

        <dl>
          <dt><b>HTML</b></dt>
          <dd>This stands for Hyper Text Markup Language</dd>
          <dt><b>HTTP</b></dt>
          <dd>This stands for Hyper Text Transfer Protocol</dd>
        </dl>
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
