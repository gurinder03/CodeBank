import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-tables',
  templateUrl: './angularjs-tables.component.html',
  styleUrls: ['./angularjs-tables.component.css']
})
export class AngularjsTablesComponent {
  sidebar: any = jsonData;
}
