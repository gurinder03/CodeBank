import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/angularJs.json';

@Component({
  selector: 'app-angularjs-forms',
  templateUrl: './angularjs-forms.component.html',
  styleUrls: ['./angularjs-forms.component.css']
})
export class AngularjsFormsComponent {
  sidebar: any = jsonData;
}
