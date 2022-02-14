import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  result?:string;
  rockets: Content[];
  constructor() {
    this.rockets=[{
      id: 1,
      title: 'Falcon 9',
      description: 'First reusable rocket',
      creator: 'Space X',
      imgURL: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/11/copernicus_sentinel-6_lifts_off_on_a_spacex_falcon_9_rocket/22340698-1-eng-GB/Copernicus_Sentinel-6_lifts_off_on_a_SpaceX_Falcon_9_rocket_pillars.jpg',
      type: 'booster',
      tags: ['Space X', ' Elon musk', ' Rockets', ' Mars']
    },
      {
        id: 2,
        title: 'Starship',
        description: 'The most powerful rocket',
        creator: 'Space X',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starship_SN9_Launch_Pad.jpg/1200px-Starship_SN9_Launch_Pad.jpg',
        type: 'booster',
        tags: ['Starship', ' Mars', ' Space', ' Moon']
      },
      {
        id: 3,
        title: 'SLS',
        description: 'The Space Launch System (abbreviated as SLS) is an American super heavy-lift expendable launch vehicle under development by NASA since 2011',
        creator: 'NASA',
        imgURL: 'https://www.nasa.gov/sites/default/files/thumbnails/image/rev27_b1b_crew_eus_cutaway_0.jpg',
        type: 'Launch vehicle',
        tags: ['Space vehicle', ' NASA', ' moon', ' astronaut']
      },
      {
        id: 4,
        title: 'New Glenn',
        description: 'New Glenn is a heavy-lift orbital launch vehicle in development by Blue Origin',
        creator: 'Blue Origin',
        imgURL: 'https://jundroo.blob.core.windows.net/simplerockets/files/2020/2/6/7ci8ol/UserView-3.jpg',
        type: 'Launch vehicle',
        tags: ['Space vehicle', ' Mars', ' New Glenn', ' Jeff']
      },
      {
        id: 5,
        title: 'Soyuz',
        description: 'Soyuz is a family of expendable Russian and Soviet carrier rockets developed by OKB-1',
        creator: 'Roscosmos',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg',
        type: 'Capsule',
        tags: ['Space vehicle', ' Russia', ' ISS', ' astronaut']
      },
      {
        id: 6,
        title: 'Falcon heavy',
        description: 'Falcon Heavy is a partially reusable heavy-lift launch vehicle designed and manufactured by SpaceX',
        creator: 'SpaceX',
        imgURL: 'https://cdn.vox-cdn.com/thumbor/txs3PZrOVo4_q-EGrNKPDkWAyog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10142497/38583830575_eb67b89fa2_o.jpg',
        type: '',
        tags: ['Space X', ' Elon musk', ' Rockets', ' Mars']
      },
      {
        id: 7,
        title: 'Saturn V',
        description: 'Saturn V was an American human-rated super heavy-lift launch vehicle used by NASA between 1967 and 1973.',
        creator: 'Boeing (S-IC); North American (S-II); Douglas (S-IVB)',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg',
        type: '',
        tags: ['Apollo', ' NASA', ' Rockets', ' Moon']
      }
    ]
  }


  ngOnInit(): void {
  }
  titleFilter(input: string): any{
    //console.log(input);
    for (let i=0; i<=7; i++ ){
      // console.log(typeof(this.rockets[i].title));
      console.log(this.rockets[5].title);
      console.log(i);
      if( this.rockets[i].title == input){
        console.log(i);
        console.log(input);
        this.result = 'Found';
        return this.result;
        //console.log(true);
      }
      else
      {
        this.result = 'Not Found';
        console.log(false);
      }
    }
  }

}
