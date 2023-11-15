import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-routing',
  templateUrl: './angularjs-routing.component.html',
  styleUrls: ['./angularjs-routing.component.css']
})
export class AngularjsRoutingComponent {

  sidebar: any = jsonData;

}
