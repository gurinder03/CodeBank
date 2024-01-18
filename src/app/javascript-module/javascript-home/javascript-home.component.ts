import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-javascript-home',
  templateUrl: './javascript-home.component.html',
  styleUrls: ['./javascript-home.component.css']
})
export class JavascriptHomeComponent {
  sidebar: any = jsonData
}
