import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-validation',
  templateUrl: './angularjs-validation.component.html',
  styleUrls: ['./angularjs-validation.component.css']
})
export class AngularjsValidationComponent {
  sidebar: any = jsonData;

}
