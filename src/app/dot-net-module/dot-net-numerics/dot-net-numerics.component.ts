import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-numerics',
  templateUrl: './dot-net-numerics.component.html',
  styleUrls: ['./dot-net-numerics.component.css']
})
export class DotNetNumericsComponent {
  sidebar: any = jsonData;
}
