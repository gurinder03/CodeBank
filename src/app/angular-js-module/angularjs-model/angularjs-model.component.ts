import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-model',
  templateUrl: './angularjs-model.component.html',
  styleUrls: ['./angularjs-model.component.css']
})
export class AngularjsModelComponent {

  sidebar: any = jsonData;

}
