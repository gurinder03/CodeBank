import { Component, ElementRef, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSearch = faSearch;
  @ViewChild('subTopNav') subTopNav!: ElementRef;
  scrollAmount = 0;
  scrollStep = 200;

  constructor() { }

  scrollRight() {
    debugger
    const nativeElement = this.subTopNav.nativeElement;
    if (this.scrollAmount < nativeElement.scrollWidth - nativeElement.clientWidth) {
      this.scrollAmount += this.scrollStep;
      nativeElement.style.transform = `translateX(-${this.scrollAmount}px)`;
    }
  }

  scrollLeft() {
    debugger
    const nativeElement = this.subTopNav.nativeElement;
    if (this.scrollAmount > 0) {
      this.scrollAmount -= this.scrollStep;
      nativeElement.style.transform = `translateX(-${this.scrollAmount}px)`;
    }
  }

}
