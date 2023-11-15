import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';


@Component({
  selector: 'app-angularjs-services',
  templateUrl: './angularjs-services.component.html',
  styleUrls: ['./angularjs-services.component.css']
})
export class AngularjsServicesComponent {
  sidebar: any = jsonData;

}
