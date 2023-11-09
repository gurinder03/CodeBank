import { Component, ElementRef, ViewChild } from '@angular/core';
import * as monaco from 'ngx-monaco-editor';

@Component({
  selector: 'app-dot-net-core-metapackage',
  templateUrl: './dot-net-core-metapackage.component.html',
  styleUrls: ['./dot-net-core-metapackage.component.css']
})
export class DotNetCoreMetapackageComponent {

  @ViewChild('editor') editorContent!: ElementRef;

  ngAfterViewInit() {
    // monaco.editor.create(this.editorContent.nativeElement, {
    //   theme: 'vs-dark',
    //   language: 'csharp',
    //   automaticLayout: true
    // });
  }
}
