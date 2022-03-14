import { Component } from '@angular/core';
import {Content} from "./helper-files/content-interface";
import {RocketService} from "./services/rocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A-Vincent-MyFavouriteRockets';
  getIdContent?: Content;
  constructor(private rocketService: RocketService ){}
  ngOnInit(): void {}

  btn(id:any) {
    this.rocketService.getIdContent(id).subscribe((getContent: any) => this.getIdContent = getContent);
  }

}
