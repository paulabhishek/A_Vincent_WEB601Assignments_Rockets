import { Component, Input, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
//import {ContentList} from "../helper-files/ content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() rockets?: Content;


  constructor() {}
  console(){
    console.log(`
    ID: ${this.rockets?.id}
    Title: ${this.rockets?.title}
     `);
  }


  ngOnInit(): void {
  }

}
