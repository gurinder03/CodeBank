import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angular-intro',
  templateUrl: './angular-intro.component.html',
  styleUrls: ['./angular-intro.component.css']
})
export class AngularIntroComponent implements OnInit {

  constructor(){}

  sidebar: any = jsonData;

  ngOnInit(): void {
      
  }

}
