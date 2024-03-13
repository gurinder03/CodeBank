import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-arithmetic',
  templateUrl: './js-arithmetic.component.html',
  styleUrls: ['./js-arithmetic.component.css']
})
export class JsArithmeticComponent {
  sidebar: any = jsonData

}
