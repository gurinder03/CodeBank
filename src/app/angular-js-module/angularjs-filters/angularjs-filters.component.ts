import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';


@Component({
  selector: 'app-angularjs-filters',
  templateUrl: './angularjs-filters.component.html',
  styleUrls: ['./angularjs-filters.component.css']
})
export class AngularjsFiltersComponent {

  sidebar: any = jsonData;
  
}
