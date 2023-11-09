import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-modules',
  templateUrl: './angularjs-modules.component.html',
  styleUrls: ['./angularjs-modules.component.css']
})
export class AngularjsModulesComponent {

  sidebar: any = jsonData;
}
