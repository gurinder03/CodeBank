import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angular-home',
  templateUrl: './angular-home.component.html',
  styleUrls: ['./angular-home.component.css']
})
export class AngularHomeComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }

  sidebar: any = jsonData;
}
