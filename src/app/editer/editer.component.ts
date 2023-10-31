import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  text = "Hello, I am an editable textarea. Hover and select me to see the editable textbox!"
  constructor() { }

  ngOnInit() {
  }

}