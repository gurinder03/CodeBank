import { Component } from '@angular/core';
// declare function  greet(): void; 
  


@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent {


  getVal(){
    // console.log(.target.value)
  }

 htmlContent: string = `<!DOCTYPE html>
<html>
<head>
  <title>TechEngineer</title>
</head>
<body>
  <h1>This is H1 Tag</h1>
  <p>This is p Tag</p>
</body>
</html>`;


  public displayHtmlContent(): void {
    debugger
    // const htmlContent = document.getElementById('html-content').innerHTML;
    const htmlIframe = document.getElementById('html-iframe') as HTMLIFrameElement;
    // @ts-expect-error
    const iframeDocument = htmlIframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(this.htmlContent);
    iframeDocument.close();
  }

}