import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-editors',
  templateUrl: './html-editors.component.html',
  styleUrls: ['./html-editors.component.css']
})
export class HtmlEditorsComponent implements OnInit {

  sidebar: any = jsonData

  constructor(){

  }

  ngOnInit(): void {
      
  }
}
