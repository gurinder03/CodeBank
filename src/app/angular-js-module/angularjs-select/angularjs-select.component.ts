import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-select',
  templateUrl: './angularjs-select.component.html',
  styleUrls: ['./angularjs-select.component.css']
})
export class AngularjsSelectComponent {
  sidebar: any = jsonData;
}
