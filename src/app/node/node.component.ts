import { Component } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {

htmlContent:string=`<!DOCTYPE html>
<html>
<head>
<title>TechEng</title>
</head>
<body>
<h1>This is Headings 1.</h1>
<h2>This is Headings 2.</h2>
<h3>This is Headings 3.</h3>
<h4>This is Headings 4.</h4>
<h5>This is Headings 5.</h5>
<h6>This is Headings 6.</h6>
</body>
</htm>`;


public displayHtmlContent(): void 
  {
    // const htmlContent = document.getElementById('html-content').innerHTML;
    const htmlIframe = document.getElementById('html-iframe') as HTMLIFrameElement;
    // @ts-expect-error
    const iframeDocument = htmlIframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(this.htmlContent);
    iframeDocument.close();
  }
}




