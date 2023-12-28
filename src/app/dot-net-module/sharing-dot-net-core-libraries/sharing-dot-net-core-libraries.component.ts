import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-sharing-dot-net-core-libraries',
  templateUrl: './sharing-dot-net-core-libraries.component.html',
  styleUrls: ['./sharing-dot-net-core-libraries.component.css']
})
export class SharingDotNetCoreLibrariesComponent {
  sidebar: any = jsonData;

}
