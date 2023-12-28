import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/css.json';

@Component({
  selector: 'app-css-home',
  templateUrl: './css-home.component.html',
  styleUrls: ['./css-home.component.css']
})
export class CssHomeComponent {
  sidebar: any = jsonData

}
