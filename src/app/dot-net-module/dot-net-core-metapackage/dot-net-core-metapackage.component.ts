import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jsonData from '../../core/jsonData/dotNet.json';
import * as monaco from 'ngx-monaco-editor';

@Component({
  selector: 'app-dot-net-core-metapackage',
  templateUrl: './dot-net-core-metapackage.component.html',
  styleUrls: ['./dot-net-core-metapackage.component.css']
})
export class DotNetCoreMetapackageComponent {
  sidebar: any = jsonData;
  @ViewChild('editor') editorContent!: ElementRef;

  ngAfterViewInit() {
    // monaco.editor.create(this.editorContent.nativeElement, {
    //   theme: 'vs-dark',
    //   language: 'csharp',
    //   automaticLayout: true
    // });
  }
}
