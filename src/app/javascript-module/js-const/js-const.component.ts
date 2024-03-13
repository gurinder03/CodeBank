import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-const',
  templateUrl: './js-const.component.html',
  styleUrls: ['./js-const.component.css']
})
export class JsConstComponent {
  sidebar: any = jsonData

}
