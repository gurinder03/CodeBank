import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-tables',
  templateUrl: './html-tables.component.html',
  styleUrls: ['./html-tables.component.css']
})
export class HtmlTablesComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <style>
  table, th, td {
    border:1px solid black;
  }
  </style>
  <body>
  
  <h2>TH elements define table headers</h2>
  
  <table style="width:100%">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>
    <tr>
      <td>Amit</td>
      <td>24</td>
      <td>Male</td>
    </tr>
    <tr>
      <td>Sahil</td>
      <td>24</td>
      <td>Male</td>
    </tr>
  </table>
  
  <p>To understand the example better, we have added borders to the table.</p>
  
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
