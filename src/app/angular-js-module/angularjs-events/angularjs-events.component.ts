import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-events',
  templateUrl: './angularjs-events.component.html',
  styleUrls: ['./angularjs-events.component.css']
})
export class AngularjsEventsComponent {

  sidebar: any = jsonData;

}
