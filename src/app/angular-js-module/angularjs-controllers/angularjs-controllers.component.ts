import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-controllers',
  templateUrl: './angularjs-controllers.component.html',
  styleUrls: ['./angularjs-controllers.component.css']
})
export class AngularjsControllersComponent {

  sidebar: any = jsonData;

}
