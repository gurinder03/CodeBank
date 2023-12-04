import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-create-dotnet-standard-library',
  templateUrl: './create-dotnet-standard-library.component.html',
  styleUrls: ['./create-dotnet-standard-library.component.css']
})
export class CreateDotnetStandardLibraryComponent {
  sidebar: any = jsonData;

}
