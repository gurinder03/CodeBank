import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/css.json';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'app-css-colors',
  templateUrl: './css-colors.component.html',
  styleUrls: ['./css-colors.component.css']
})
export class CssColorsComponent {
  
  sidebar: any = jsonData

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;


}
