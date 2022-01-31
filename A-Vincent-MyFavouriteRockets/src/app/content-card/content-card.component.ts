import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentList} from "../helper-files/ content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  falcon: Content;
  starship: Content;
  newGlenn: Content;
  rockets: ContentList;

  constructor() {
    this.falcon = {
      id: 1,
      title: 'Falcon 9',
      description: 'First reusable rocket',
      creator: 'Space X',
      imgURL: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/11/copernicus_sentinel-6_lifts_off_on_a_spacex_falcon_9_rocket/22340698-1-eng-GB/Copernicus_Sentinel-6_lifts_off_on_a_SpaceX_Falcon_9_rocket_pillars.jpg',
      type: 'Space vehicle',
      tags: ['Space X', 'Elon musk', 'Rockets', 'Mars']
    };
    this.starship = {
      id: 2,
      title: 'Starship',
      description: 'The most powerful rocket',
      creator: 'Space X',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starship_SN9_Launch_Pad.jpg/1200px-Starship_SN9_Launch_Pad.jpg',
      type: 'Space vehicle',
      tags: ['Starship', 'Mars', 'Space', 'Moon']
    };
    this.newGlenn = {
      id: 3,
      title: 'New Glenn',
      description: 'New Glenn is a heavy-lift orbital launch vehicle in development by Blue Origin',
      creator: 'Blue Origin',
      imgURL: 'https://jundroo.blob.core.windows.net/simplerockets/files/2020/2/6/7ci8ol/UserView-3.jpg',
      type: 'Space vehicle',
      tags: ['Space vehicle', 'Mars', 'New Glenn', 'Jeff']
    };

    this.rockets = new ContentList();
    this.rockets.addItem(this.newGlenn);
    this.rockets.addItem(this.starship);
    this.rockets.addItem(this.falcon);


  }

  ngOnInit(): void {
  }

}
