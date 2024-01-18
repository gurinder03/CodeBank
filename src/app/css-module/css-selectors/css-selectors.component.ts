import { Component, ElementRef, ViewChild  } from '@angular/core';
import * as jsonData from '../../core/jsonData/css.json';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';


@Component({
  selector: 'app-css-selectors',
  templateUrl: './css-selectors.component.html',
  styleUrls: ['./css-selectors.component.css']
})
export class CssSelectorsComponent {
  
  sidebar: any = jsonData

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance

  defaultHtml = `<!DOCTYPE html>
  <html>
  <head>
  <style>
  h5 {
    text-align: center;
    color: red;
  } 
  #para1 {
    text-align: center;
    color: red;
  }
  .center {
    text-align: center;
    color: red;
  }
  h4, h6 {
    text-align: center;
    color: red;
  }
  </style>
  </head>
  <body>
  
  <h5>Every paragraph will be affected by the style.</h5>

  <p id="para1">Hello World!</p>

  <p class="center">Red and center-aligned paragraph.</p> 

  <h4>Hello World!</h4>
  <h6>Smaller heading!</h6>


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
