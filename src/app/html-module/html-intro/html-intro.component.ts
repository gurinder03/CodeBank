import { Component } from '@angular/core';

@Component({
  selector: 'app-html-intro',
  templateUrl: './html-intro.component.html',
  styleUrls: ['./html-intro.component.css']
})
export class HtmlIntroComponent {
	blankUrl = '';
	currentUrl!: string;
  checkoutUrls = ['/html/html-intro'];
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
}
