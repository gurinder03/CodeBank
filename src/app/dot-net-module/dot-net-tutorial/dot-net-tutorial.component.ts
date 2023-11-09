import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-tutorial',
  templateUrl: './dot-net-tutorial.component.html',
  styleUrls: ['./dot-net-tutorial.component.css']
})
export class DotNetTutorialComponent implements OnInit {

  constructor(){}

  sidebar: any = jsonData;

  ngOnInit(): void {
      
  }
}
