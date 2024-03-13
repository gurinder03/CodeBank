import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/javascript.json';


@Component({
  selector: 'app-jst-comments',
  templateUrl: './jst-comments.component.html',
  styleUrls: ['./jst-comments.component.css']
})
export class JstCommentsComponent {
  sidebar: any = jsonData

}
