import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-variables',
  templateUrl: './js-variables.component.html',
  styleUrls: ['./js-variables.component.css']
})
export class JsVariablesComponent {
  sidebar: any = jsonData

}
