import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-output',
  templateUrl: './js-output.component.html',
  styleUrls: ['./js-output.component.css']
})
export class JsOutputComponent {
  sidebar: any = jsonData

}
