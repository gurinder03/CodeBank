import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  sidebarList: any

  @Input() sidebarData!: string;

  constructor(){}

  ngOnInit(): void {
    this.sidebarList = this.sidebarData
    
    console.log('sidebar fdd=> ', this.sidebarList);
  }

 
}
