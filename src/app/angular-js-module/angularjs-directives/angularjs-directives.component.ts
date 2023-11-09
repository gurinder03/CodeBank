import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-directives',
  templateUrl: './angularjs-directives.component.html',
  styleUrls: ['./angularjs-directives.component.css']
})
export class AngularjsDirectivesComponent {
  sidebar: any = jsonData;
}
