import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-window-runtime-ext-sdk',
  templateUrl: './window-runtime-ext-sdk.component.html',
  styleUrls: ['./window-runtime-ext-sdk.component.css']
})
export class WindowRuntimeExtSdkComponent {
  sidebar: any = jsonData;

}
