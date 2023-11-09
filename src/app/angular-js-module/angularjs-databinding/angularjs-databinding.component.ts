import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-databinding',
  templateUrl: './angularjs-databinding.component.html',
  styleUrls: ['./angularjs-databinding.component.css']
})
export class AngularjsDatabindingComponent {

  sidebar: any = jsonData;
}
