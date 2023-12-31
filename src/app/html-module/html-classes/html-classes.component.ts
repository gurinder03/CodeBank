import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-classes',
  templateUrl: './html-classes.component.html',
  styleUrls: ['./html-classes.component.css']
})
export class HtmlClassesComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <head>
  <style>
  .city {
    background-color: tomato;
    color: white;
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
  }
  .main {
    text-align: center;
  }
  </style>
  </head>
  <body>
  
  <div class="city">
  <h2>Punjab</h2>
  <p>Chandigarh is the capital of punjab.</p>
  </div> 
  
  <div class="city">
  <h2>Haryana</h2>
  <p>Chandigarh is the capital of punjab.</p>
  </div>
  
  <div class="city">
  <h2>Himachal</h2>
  <p>Shimla is the capital of Himachal.</p>
  </div>
  <h2 class="city main">India</h2>



  <h2>Use of The class Attribute in JavaScript</h2>
<p>Click the button to hide all elements with class name "city":</p>

<button onclick="myFunction()">Hide elements</button>

<h2 class="city1">London</h2>
<p>London is the capital of England.</p>

<h2 class="city1">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city1">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

<script>
function myFunction() {
  var x = document.getElementsByClassName("city1");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>
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
