import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-sql',
  templateUrl: './angularjs-sql.component.html',
  styleUrls: ['./angularjs-sql.component.css']
})
export class AngularjsSqlComponent {


  sidebar: any = jsonData;

}
