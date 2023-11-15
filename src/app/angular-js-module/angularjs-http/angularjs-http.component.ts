import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-http',
  templateUrl: './angularjs-http.component.html',
  styleUrls: ['./angularjs-http.component.css']
})
export class AngularjsHttpComponent {

  sidebar: any = jsonData;
}
