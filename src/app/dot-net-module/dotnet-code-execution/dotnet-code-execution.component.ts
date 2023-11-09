import { Component } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';

@Component({
  selector: 'app-dotnet-code-execution',
  templateUrl: './dotnet-code-execution.component.html',
  styleUrls: ['./dotnet-code-execution.component.css']
})
export class DotnetCodeExecutionComponent {
  sidebar: any = jsonData;
}
