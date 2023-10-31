import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  ngOnInit() {
    // Add the necessary logic for your component initialization if required
  }

  scrollToTop() {
    window.scroll(0, 0); // Scrolls to the top of the page
  }
}
