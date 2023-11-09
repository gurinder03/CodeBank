import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-core-prerequisites',
  templateUrl: './dot-net-core-prerequisites.component.html',
  styleUrls: ['./dot-net-core-prerequisites.component.css']
})
export class DotNetCorePrerequisitesComponent {
  sidebar: any = jsonData;
}
