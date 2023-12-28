import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/css.json';

@Component({
  selector: 'app-css-intro',
  templateUrl: './css-intro.component.html',
  styleUrls: ['./css-intro.component.css']
})
export class CssIntroComponent {
  sidebar: any = jsonData

}
