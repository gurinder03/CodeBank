import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-dom',
  templateUrl: './angularjs-dom.component.html',
  styleUrls: ['./angularjs-dom.component.css']
})
export class AngularjsDomComponent {

  sidebar: any = jsonData;
  
}
