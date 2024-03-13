import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';

@Component({
  selector: 'app-js-assignment',
  templateUrl: './js-assignment.component.html',
  styleUrls: ['./js-assignment.component.css']
})
export class JsAssignmentComponent {
  sidebar: any = jsonData
  
}
