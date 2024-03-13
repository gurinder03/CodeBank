import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-statements',
  templateUrl: './js-statements.component.html',
  styleUrls: ['./js-statements.component.css']
})
export class JsStatementsComponent {
  sidebar: any = jsonData

}
