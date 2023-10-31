import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent implements OnInit {
  
  @Input() type!: 'facebook' | 'twitter' | 'gmail' | 'linkedIn';
  @Input() shareUrl!: string;
  @Input() gmailSubject!: string;
  navUrl!: string;
  constructor() { }

  ngOnInit() {
    this.createNavigationUrl();
  }

  private createNavigationUrl() {
    let searchParams = new URLSearchParams();
    switch(this.type) {
      case 'facebook':
        searchParams.set('u', this.shareUrl);
        this.navUrl = 'https://www.facebook.com/sharer/sharer.php?' + searchParams;
        break;
      case 'twitter':
        searchParams.set('url', this.shareUrl);
        this.navUrl =  'https://twitter.com/share?' + searchParams;
        break;
      case 'gmail':
        debugger
        searchParams.set('url', this.shareUrl);
        const mailtoLink = `mailto:?subject=${encodeURIComponent(this.gmailSubject)}&body=${encodeURIComponent(this.shareUrl)}`;
        this.navUrl =  mailtoLink
        break;
      case 'linkedIn':
        searchParams.set('url', this.shareUrl);
        this.navUrl =  `https://www.linkedin.com/sharing/share-offsite/?url=${searchParams}`;
        break;
    }
  }

  public share() {
    return window.open(this.navUrl, "_blank");
  }

}
