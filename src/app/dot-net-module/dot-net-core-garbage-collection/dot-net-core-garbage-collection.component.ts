import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';


@Component({
  selector: 'app-dot-net-core-garbage-collection',
  templateUrl: './dot-net-core-garbage-collection.component.html',
  styleUrls: ['./dot-net-core-garbage-collection.component.css']
})
export class DotNetCoreGarbageCollectionComponent {
  sidebar: any = jsonData;
}
