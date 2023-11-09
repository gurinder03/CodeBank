import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-links',
  templateUrl: './html-links.component.html',
  styleUrls: ['./html-links.component.css']
})
export class HtmlLinksComponent {
    

  sidebar: any = jsonData
  
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  private cm: any; // CodeMirror instance

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <h1>HTML Links</h1>
  
  <p><a href="https://thetechenigneer.in/">Visit CodeBank</a></p>

  <a href="https://thetechenigneer.in/" target="_blank">Visit CodeBank</a>

  <h2>Absolute URLs</h2>
  <p><a href="https://thetechenigneer.in/">CodeBank</a></p>
  <p><a href="https://www.google.com/">Google</a></p>

  <h2>Relative URLs</h2>
  <p><a href="about-us">About us</a></p>
  <p><a href="/html/html-elements">HTML Elements</a></p>
  

  <a href="about-us">
  <img src="./assets/images/code1.jpg" alt="HTML tutorial" style="width:42px;height:42px;">
  </a>
  <br>
  <a href="mailto:hrmanager@thetechenigneer.com">Send email</a>
  <br>
  <button onclick="document.location='/html/html-tutorial'">HTML Tutorial</button><br>

  <a href="https://thetechenigneer.in/" title="Go to CodeBank">Visit our HTML Tutorial</a>
  </body>
  </html>
  
  `;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cm = CodeMirror.fromTextArea(this.codeEditor.nativeElement, {
      mode: 'htmlmixed',
      theme: 'material',
      value: this.defaultHtml,
    });
	this.cm.getDoc().setValue(this.defaultHtml);
  }

  runCode() {
    const code = this.cm.getValue();
    const outputContainer = this.outputContainer.nativeElement;
    outputContainer.innerHTML = code;
  }
}
