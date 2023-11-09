import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';
@Component({
  selector: 'app-dot-net-core-modularity',
  templateUrl: './dot-net-core-modularity.component.html',
  styleUrls: ['./dot-net-core-modularity.component.css']
})
export class DotNetCoreModularityComponent {
  sidebar: any = jsonData;
}
