import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dot-net-core-adding-reference-to-library',
  templateUrl: './dot-net-core-adding-reference-to-library.component.html',
  styleUrls: ['./dot-net-core-adding-reference-to-library.component.css']
})
export class DotNetCoreAddingReferenceToLibraryComponent {
  sidebar: any = jsonData;

}
