import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-core-data-types',
  templateUrl: './dot-net-core-data-types.component.html',
  styleUrls: ['./dot-net-core-data-types.component.css']
})
export class DotNetCoreDataTypesComponent {
  sidebar: any = jsonData;

}
