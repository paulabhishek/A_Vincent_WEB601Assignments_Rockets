import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  rockets: Content[];

  constructor() {
    this.rockets=[{
      id: 1,
      title: 'Falcon 9',
      description: 'First reusable rocket',
      creator: 'Space X',
      imgURL: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/11/copernicus_sentinel-6_lifts_off_on_a_spacex_falcon_9_rocket/22340698-1-eng-GB/Copernicus_Sentinel-6_lifts_off_on_a_SpaceX_Falcon_9_rocket_pillars.jpg',
      type: 'Space vehicle',
      tags: ['Space X', 'Elon musk', 'Rockets', 'Mars']
    },
      {
        id: 2,
        title: 'Starship',
        description: 'The most powerful rocket',
        creator: 'Space X',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starship_SN9_Launch_Pad.jpg/1200px-Starship_SN9_Launch_Pad.jpg',
        type: 'Space vehicle',
        tags: ['Starship', 'Mars', 'Space', 'Moon']
      },
      {
        id: 3,
        title: 'SLS',
        description: 'The Space Launch System (abbreviated as SLS) is an American super heavy-lift expendable launch vehicle under development by NASA since 2011',
        creator: 'NASA',
        imgURL: 'https://www.nasa.gov/sites/default/files/thumbnails/image/rev27_b1b_crew_eus_cutaway_0.jpg',
        type: 'Space vehicle',
        tags: ['Space vehicle', 'NASA', 'moon', 'astronaut']
      },
      {
        id: 4,
        title: 'New Glenn',
        description: 'New Glenn is a heavy-lift orbital launch vehicle in development by Blue Origin',
        creator: 'Blue Origin',
        imgURL: 'https://jundroo.blob.core.windows.net/simplerockets/files/2020/2/6/7ci8ol/UserView-3.jpg',
        type: 'Space vehicle',
        tags: ['Space vehicle', 'Mars', 'New Glenn', 'Jeff']
      },
      {
        id: 5,
        title: 'Soyuz',
        description: 'Soyuz is a family of expendable Russian and Soviet carrier rockets developed by OKB-1',
        creator: 'Roscosmos',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg',
        type: 'Space vehicle',
        tags: ['Space vehicle', 'Russia', 'ISS', 'astronaut']
      }]
  }

  ngOnInit(): void {
  }

}
