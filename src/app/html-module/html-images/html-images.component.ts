import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-images',
  templateUrl: './html-images.component.html',
  styleUrls: ['./html-images.component.css']
})
export class HtmlImagesComponent {

  

  sidebar: any = jsonData
  
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <h1 style="background-color:DodgerBlue;">Hello World</h1>
  
  <p style="background-color:Tomato;">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt .
  </p>

  <h3 style="color:Tomato;">Hello World</h3>

  <p style="color:DodgerBlue;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>

  <p style="color:MediumSeaGreen;">Ut wisi enim ad minim veniam, quis nostrud exerci tation .</p>

  <h1 style="border: 2px solid Tomato;">Hello World</h1>

  <h1 style="border: 2px solid DodgerBlue;">Hello World</h1>

  <h1 style="border: 2px solid Violet;">Hello World</h1>

  <p>Same as color name "Tomato":</p>

<h1 style="background-color:rgb(255, 99, 71);">rgb(255, 99, 71)</h1>
<h1 style="background-color:#ff6347;">#ff6347</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">hsl(9, 100%, 64%)</h1>

<p>Same as color name "Tomato", but 50% transparent:</p>
<h1 style="background-color:rgba(255, 99, 71, 0.5);">rgba(255, 99, 71, 0.5)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">hsla(9, 100%, 64%, 0.5)</h1>

<p>In addition to the predefined color names, colors can be specified using RGB, HEX.</p>
  
  </body>
  </html>
  `;

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
