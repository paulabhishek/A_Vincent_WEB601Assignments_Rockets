import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {RocketService} from "../services/rocket.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  result?:string;
  rockets: Content[];
  constructor(private rocketService: RocketService) {
    this.rockets = [];
  }


  ngOnInit(): void {
    this.getRocketFromServer();
    this.rocketService.getContentObs().subscribe(array=>this.rockets=array);
  }

  getRocketFromServer(): void{
    this.rocketService.getContent().subscribe(rocketArray => this.rockets = rocketArray);
  }
  addRocketToList(newRocketFromChild : Content): void{
    this.rocketService.addContent(newRocketFromChild).subscribe(newContentFromServer =>{
      console.log("Content from server: ", newContentFromServer);
      this.rockets.push(newContentFromServer);
      this.rockets = [...this.rockets];
    })
  }
  updateRocketInList(contentItem: Content): void{
    this.rocketService.updateContent(contentItem).subscribe(()=>{
      console.log('Updated content title, id' + contentItem.title + contentItem.id);
      this.getRocketFromServer();
    })
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
