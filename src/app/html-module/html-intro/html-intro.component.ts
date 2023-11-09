import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-intro',
  templateUrl: './html-intro.component.html',
  styleUrls: ['./html-intro.component.css'],
})
export class HtmlIntroComponent implements OnInit {

  sidebar: any = jsonData;
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;
  private cm: any; // CodeMirror instance
  defaultHtml = `<html>
  <head>
	  <title>My HTML Document</title>
  </head>
  <body>
	  <p>Hello, world!</p>
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
    console.log(this.cm.getValue());
    const outputContainer = this.outputContainer.nativeElement;
    outputContainer.innerHTML = code;

    // const code = this.cm.getValue();
    // console.log(this.cm.getValue());
    // const outputFrame = this.outputFrame.nativeElement;
    // const iframeDoc = outputFrame.contentWindow.document;

    // iframeDoc.open();
    // iframeDoc.write(code);
    // iframeDoc.close();
  }
}
