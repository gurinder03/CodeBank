import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import * as CodeMirror from 'codemirror';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

import 'codemirror/mode/htmlmixed/htmlmixed';
@Component({
  selector: 'app-html-attributes',
  templateUrl: './html-attributes.component.html',
  styleUrls: ['./html-attributes.component.css']
})
export class HtmlAttributesComponent implements OnInit {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance
  sidebar: any = jsonData

  defaultHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
  </head>
  <body>
  
  <h2>The href Attribute</h2>
  
  <p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>
  
  <a href="https://thetechenigneer.in/">Visit CodeBank</a><br>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
   height="100" width="100"><br>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
   width="300" height="300"><br><br>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
   width=200" height="200" alt="Girl with a jacket"><br>
  <p style="color:red;">This is a red paragraph.</p><br>
  
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
