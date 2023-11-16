import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'app-angular-home',
  templateUrl: './angular-home.component.html',
  styleUrls: ['./angular-home.component.css'],
})
export class AngularHomeComponent implements OnInit {
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance
  defaultHtml = `<!DOCTYPE html>
  <html lang="en" ng-app="myApp">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AngularJS Default Page</title>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  </head>
  <body>
  
  <div ng-controller="myController">
  <p>{{ message }}</p>
  </div>
  
  <script>
      var app = angular.module('myApp', []);
      app.controller('myController', function($scope) {
        $scope.greet = function() {
          $scope.message = 'Hello, AngularJS!';
      };

      // Call the default function
      $scope.greet();
      });
  </script>
  
  </body>
  </html>`;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cm = CodeMirror.fromTextArea(this.codeEditor.nativeElement, {
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true,
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
