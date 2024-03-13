import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';

@Component({
  selector: 'app-js-let',
  templateUrl: './js-let.component.html',
  styleUrls: ['./js-let.component.css']
})
export class JsLetComponent {
  sidebar: any = jsonData

}
