import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-animations',
  templateUrl: './angularjs-animations.component.html',
  styleUrls: ['./angularjs-animations.component.css']
})
export class AngularjsAnimationsComponent {
  sidebar: any = jsonData;

}
