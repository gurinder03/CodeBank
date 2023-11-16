import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-layout',
  templateUrl: './html-layout.component.html',
  styleUrls: ['./html-layout.component.css']
})
export class HtmlLayoutComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <title>CSS Template</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  
  /* Style the header */
  header {
    background-color: #666;
    padding: 30px;
    text-align: center;
    font-size: 35px;
    color: white;
  }
  
  /* Create two columns/boxes that floats next to each other */
  .nav1 {
    float: left;
    width: 30%;
    height: 300px; /* only for demonstration, should be removed */
    background: #ccc;
    padding: 20px;
  }
  
  /* Style the list inside the menu */
  .nav1 ul {
    list-style-type: none;
    padding: 0;
  }
  
  article {
    float: left;
    padding: 20px;
    width: 70%;
    background-color: #f1f1f1;
    height: 300px; /* only for demonstration, should be removed */
  }
  
  /* Clear floats after the columns */
  section::after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Style the footer */
  footer {
    background-color: #777;
    padding: 10px;
    text-align: center;
    color: white;
  }
  
  
  @media (max-width: 600px) {
    nav, article {
      width: 100%;
      height: auto;
    }
  }
  </style>
  </head>
  <body>
  
  <h2>CSS Layout Float</h2>
  <p>In this example, we have created a header, two columns/boxes and a footer. </p>
  <p>Resize the browser window to see the responsive effect .</p>
  
  <header>
    <h2>Cities</h2>
  </header>
  
  <section>
    <nav class="nav1">
      <ul>
        <li><a href="#">London</a></li>
        <li><a href="#">Paris</a></li>
        <li><a href="#">Tokyo</a></li>
      </ul>
    </nav>
    
    <article>
      <h1>London</h1>
      <p>London is the capital city of England. It is the most populou.</p>
      <p>Standing on the River Thames, London has been a ..</p>
    </article>
  </section>
  
  <footer>
    <p>Footer</p>
  </footer>
  
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
    this.htmlVal = this.cm.getValue();
    const outputContainer = this.outputContainer.nativeElement;
    outputContainer.innerHTML = this.htmlVal;
  }
}
