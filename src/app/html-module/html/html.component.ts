import { Component,ViewChild,ElementRef} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

declare function getData(): any;

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent {
	blankUrl = '';
	currentUrl!: string;
  checkoutUrls = ['/login'];

  constructor(public router: Router){
  
  }
  isCheckoutRoute() {
		if (!this.currentUrl) {
			return false;
		}
		const index = this.checkoutUrls.indexOf(this.currentUrl);
		if (index >= 0) {
			return true;
		} else {
			return false;
		}
	}

  // @ViewChild('container') container: ElementRef | undefined;
 
  // scrollToElement(elementId: string): void {
  //   const element = document.getElementById(elementId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

}
