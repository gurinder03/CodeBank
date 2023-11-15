import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';
import * as CodeMirror from 'codemirror';
import "codemirror/mode/javascript/javascript";

@Component({
  selector: 'app-angular-home',
  templateUrl: './angular-home.component.html',
  styleUrls: ['./angular-home.component.css']
})
export class AngularHomeComponent implements OnInit {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance
  defaultHtml = `<!DOCTYPE html>
  <html>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <body>
  
  <div ng-app="">
   
  <p>Input something in the input box:</p>
  <p>Name : <input type="text" ng-model="name" placeholder="Enter name here"></p>
  <h1>Hello {{name}}</h1>
  
  </div>
  
  </body>
  </html>
  `;
  
  constructor(){}

  ngOnInit(): void {
      
  }

  ngAfterViewInit() {
    this.cm = CodeMirror.fromTextArea(this.codeEditor.nativeElement, {
      mode: 'javascript',
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
  }

  sidebar: any = jsonData;
}
