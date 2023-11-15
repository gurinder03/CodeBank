import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsonData from '../../core/jsonData/htmlSidebar.json';


@Component({
  selector: 'app-html-div',
  templateUrl: './html-div.component.html',
  styleUrls: ['./html-div.component.css']
})
export class HtmlDivComponent {

  @ViewChild('codeEditor') codeEditor!: ElementRef;
  @ViewChild('outputContainer') outputContainer!: ElementRef;

  htmlVal: any;
  private cm: any; // CodeMirror instance

  sidebar: any = jsonData;

  defaultHtml = `<!DOCTYPE html>
  <html>
  <style>
  .i-am {
    background-color: #FFF4A3;
  }
  .london{
    width: 300px;
    margin: auto;
    background-color: #FFF4A3;
  }
  div.mycontainer {
    width:100%;
    overflow:auto;
  }
  div.mycontainer div {
    width:33%;  
    float:left;
  }
  .main{
    width:30%;  
    display:inline-block;
  }
  .mycontainer1 {
    display: flex;
  }
  .mycontainer1 > div {
    width:33%;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
  </style>
  <body>
  
  <h1>HTML DIV Example</h1>
  
  Lorem Ipsum <div class="i-am">I am a div</div> dolor sit amet.
  
  <p>The yellow background is added to demonstrate the footprint of the DIV element.</p>
  <div class="i-am">
    <h2>add</h2>
    <p>Paragraph</p>
    <p>Paragraph</p>
  </div>
  
    <div class="london">
    <h2>asdf</h2>
    <p>Para</p>
    <p>Para</p>
    </div>
    <div style="background-color:#FFF4A3;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 13 million inhabitants.</p>
</div>

<div style="background-color:#FFC0C7;">
  <h2>Oslo</h2>
  <p>Oslo is the capital city of Norway.</p>
  <p>Oslo has over 600.000 inhabitants.</p>
</div>

<div style="background-color:#D9EEE1;">
  <h2>Rome</h2>
  <p>Rome is the capital city of Italy.</p>
  <p>Rome has almost 3 million inhabitants.</p>
</div>

<div class="mycontainer">

  <div style="background-color:#FFF4A3;">
    <h2>London</h2>
    <p>London is the capital city of England.</p>
    <p>London has over 13 million inhabitants.</p>
  </div>
  
  <div style="background-color:#FFC0C7;">
    <h2>Oslo</h2>
    <p>Oslo is the capital city of Norway.</p>
    <p>Oslo has over 600.000 inhabitants.</p>
  </div>
  
  <div style="background-color:#D9EEE1;">
    <h2>Rome</h2>
    <p>Rome is the capital city of Italy.</p>
    <p>Rome has almost 3 million inhabitants.</p>
  </div>
  <div class="main">
      <div style="background-color:#FFF4A3;">
      <h2>London</h2>
      <p>London is the capital city of England.</p>
      <p>London has over 13 million inhabitants.</p>
    </div>

    <div style="background-color:#FFC0C7;">
      <h2>Oslo</h2>
      <p>Oslo is the capital city of Norway.</p>
      <p>Oslo has over 600.000 inhabitants.</p>
    </div>

    <div style="background-color:#D9EEE1;">
      <h2>Rome</h2>
      <p>Rome is the capital city of Italy.</p>
      <p>Rome has almost 3 million inhabitants.</p>
    </div>
  </div>


</div>
<div class="mycontainer1">

  <div style="background-color:#FFF4A3;">
    <h2>London</h2>
    <p>London is the capital city of England.</p>
    <p>London has over 13 million inhabitants.</p>
  </div>
  
  <div style="background-color:#FFC0C7;">
    <h2>Oslo</h2>
    <p>Oslo is the capital city of Norway.</p>
    <p>Oslo has over 600.000 inhabitants.</p>
  </div>
  
  <div style="background-color:#D9EEE1;">
    <h2>Rome</h2>
    <p>Rome is the capital city of Italy.</p>
    <p>Rome has almost 3 million.</p>
  </div>

</div>
<h1>Grid Example</h1>

<p>Align three DIV elements side by side.</p>

<div class="grid-container">

<div style="background-color:#FFF4A3;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 13 million inhabitants.</p>
</div>

<div style="background-color:#FFC0C7;">
  <h2>Oslo</h2>
  <p>Oslo is the capital city of Norway.</p>
  <p>Oslo has over 600.000 inhabitants.</p>
</div>

<div style="background-color:#D9EEE1;">
  <h2>Rome</h2>
  <p>Rome is the capital city of Italy.</p>
  <p>Rome has almost 3 million inhabitants.</p>
</div>

</div>
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
