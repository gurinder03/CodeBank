import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-api',
  templateUrl: './angularjs-api.component.html',
  styleUrls: ['./angularjs-api.component.css']
})
export class AngularjsApiComponent {

  sidebar: any = jsonData;
}
