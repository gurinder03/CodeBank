import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {

  htmlContent: string = `<!DOCTYPE html>
  <html>
  <head>
  <meta charset='utf-8'>
  <meta name="description" content=" Take traninig from TechEng">
  <meta name="keywords" content="Traninig">
  <meta name="author" content="TechEng">
  <meta http-equiv="refresh " content="TechEng">
  </head>
  <body>
  <h>This is meta Tag</h>
  </body>
  </html>`;

 display(): void {
    // const htmlContent = document.getElementById('html-content').innerHTML;
    const htmlIframe = document.getElementById('html-iframe') as HTMLIFrameElement;
    // @ts-expect-error
    const iframeDocument = htmlIframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(this.htmlContent);
    iframeDocument.close();
  }
}
