import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-id',
  templateUrl: './html-id.component.html',
  styleUrls: ['./html-id.component.css']
})
export class HtmlIdComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <head>
  <style>
  /* Style the element with the id "myHeader" */
  #myHeader {
    background-color: lightblue;
    color: black;
    padding: 40px;
    text-align: center;
  }
  
  /* Style all elements with the class name "city" */
  .city {
    background-color: tomato;
    color: white;
    padding: 10px;
  } 
  </style>
  </head>
  <body>
  
  <h2>Difference Between Class and ID</h2>
  <p>A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:</p>
  
  <!-- An element with a unique id -->
  <h1 id="myHeader">My Cities</h1>
  
  <!-- Multiple elements with same class -->
  <h2 class="city">Himachal</h2>
  <p>Shimla is the capital of Himachal.</p>
  
  <h2 class="city">India</h2>
  <p>Delhi is the capital of India.</p>
  
  <h2 class="city">Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>


  
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
