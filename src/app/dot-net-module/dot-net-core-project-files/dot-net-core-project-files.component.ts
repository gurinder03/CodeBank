import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-core-project-files',
  templateUrl: './dot-net-core-project-files.component.html',
  styleUrls: ['./dot-net-core-project-files.component.css']
})
export class DotNetCoreProjectFilesComponent {
  sidebar: any = jsonData;
}
