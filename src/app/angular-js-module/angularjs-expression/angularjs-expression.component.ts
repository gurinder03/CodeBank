import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-expression',
  templateUrl: './angularjs-expression.component.html',
  styleUrls: ['./angularjs-expression.component.css']
})
export class AngularjsExpressionComponent implements OnInit {

  constructor(){}

  sidebar: any = jsonData;

  ngOnInit(): void {
      
  }
}
