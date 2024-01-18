import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';

@Component({
  selector: 'app-javascript-intro',
  templateUrl: './javascript-intro.component.html',
  styleUrls: ['./javascript-intro.component.css']
})
export class JavascriptIntroComponent {
  sidebar: any = jsonData

}
