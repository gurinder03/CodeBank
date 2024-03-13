import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-js-syntax',
  templateUrl: './js-syntax.component.html',
  styleUrls: ['./js-syntax.component.css']
})
export class JsSyntaxComponent {
  sidebar: any = jsonData
}
