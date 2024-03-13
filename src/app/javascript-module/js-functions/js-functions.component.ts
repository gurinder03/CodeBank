import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-functions',
  templateUrl: './js-functions.component.html',
  styleUrls: ['./js-functions.component.css']
})
export class JsFunctionsComponent {
  sidebar: any = jsonData

}
