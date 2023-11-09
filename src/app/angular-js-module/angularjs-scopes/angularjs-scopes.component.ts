import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';


@Component({
  selector: 'app-angularjs-scopes',
  templateUrl: './angularjs-scopes.component.html',
  styleUrls: ['./angularjs-scopes.component.css']
})
export class AngularjsScopesComponent {
  sidebar: any = jsonData;
}
