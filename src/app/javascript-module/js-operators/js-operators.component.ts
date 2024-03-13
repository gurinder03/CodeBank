import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-operators',
  templateUrl: './js-operators.component.html',
  styleUrls: ['./js-operators.component.css']
})
export class JsOperatorsComponent {
  sidebar: any = jsonData

}
