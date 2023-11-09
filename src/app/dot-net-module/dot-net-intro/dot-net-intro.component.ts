import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-intro',
  templateUrl: './dot-net-intro.component.html',
  styleUrls: ['./dot-net-intro.component.css']
})
export class DotNetIntroComponent implements OnInit {

  constructor(){}

  sidebar: any = jsonData;

  ngOnInit(): void {
      
  }

}
