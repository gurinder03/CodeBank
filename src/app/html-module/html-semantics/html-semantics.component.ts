import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';

@Component({
  selector: 'app-html-semantics',
  templateUrl: './html-semantics.component.html',
  styleUrls: ['./html-semantics.component.css'],
})
export class HtmlSemanticsComponent {
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <body>

  <article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
  <p>WWF's mission is to st.</p>
</article>
<aside>
<h4>Epcot Center</h4>
<p>Epcot is a theme park at Walt Disney.</p>
</aside>
  <section>
    <h1>WWF</h1>
    <p>The World Wide Fund for Nature (WWF) </p>
  </section>
  
  <section>
    <h1>WWF's Panda symbol</h1>
    <p>The Panda has become the symbol of WWF. </p>
  </section>
  

  <h1>The article element</h1>

  <article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser </p>
  </article>

  <article>
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source </p>
  </article>

  <footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
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
