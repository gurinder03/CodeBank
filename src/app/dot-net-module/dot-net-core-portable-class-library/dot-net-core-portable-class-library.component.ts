import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-core-portable-class-library',
  templateUrl: './dot-net-core-portable-class-library.component.html',
  styleUrls: ['./dot-net-core-portable-class-library.component.css']
})
export class DotNetCorePortableClassLibraryComponent {
  sidebar: any = jsonData;

}
