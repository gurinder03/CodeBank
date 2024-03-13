import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';

@Component({
  selector: 'app-js-data-types',
  templateUrl: './js-data-types.component.html',
  styleUrls: ['./js-data-types.component.css']
})
export class JsDataTypesComponent {
  sidebar: any = jsonData

}
