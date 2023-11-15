import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-includes',
  templateUrl: './angularjs-includes.component.html',
  styleUrls: ['./angularjs-includes.component.css']
})
export class AngularjsIncludesComponent {

  sidebar: any = jsonData;

}
