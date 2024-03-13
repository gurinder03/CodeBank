import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';

@Component({
  selector: 'app-js-where-to',
  templateUrl: './js-where-to.component.html',
  styleUrls: ['./js-where-to.component.css']
})
export class JsWhereToComponent {
  sidebar: any = jsonData

}
