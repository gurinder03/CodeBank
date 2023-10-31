import { Component } from '@angular/core';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent {
  htmlContent:string=`<!DOCTYPE html>
  <html>
  <head>
  <title>
  TechEngineer
  </title>
  </head>
  <body>
  <span style="background-color:white;"><b> <i>
  This is span Tag
  </i> </b> </span >
  <p style="background-color:black; color:white;"><u>
  This is p Tag
  </u> </p>
  </body>
  </html>`;
   display(): void 
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
