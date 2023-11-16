import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-iframe',
  templateUrl: './html-iframe.component.html',
  styleUrls: ['./html-iframe.component.css'],
})
export class HtmlIframeComponent {
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>
  
  <h2>Remove the Iframe Border</h2>
  <p>To remove the default border of the iframe, use CSS:</p>
  
  <iframe width="400" height="200" src="https://www.youtube.com/embed/-7qGNHsMR3M?si=zZkNJwhVHJbvYKPk" 
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
   clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" allowfullscreen name="iframe_a"></iframe>

   
<p><a href="https://thetechenigneer.in/" target="iframe_a">W3Schools.com</a></p>

<p>When the target attribute of a link matches the name of an iframe, the link will open in the iframe.</p>
  
  </body>
  </html>`;

  ngAfterViewInit() {
    this.cm = CodeMirror.fromTextArea(this.codeEditor.nativeElement, {
      mode: 'htmlmixed',
      theme: 'material',
      value: this.defaultHtml,
    });
    this.cm.getDoc().setValue(this.defaultHtml);
  }

  runCode() {
    this.htmlVal = this.cm.getValue();
    const outputContainer = this.outputContainer.nativeElement;
    outputContainer.innerHTML = this.htmlVal;
  }
}
