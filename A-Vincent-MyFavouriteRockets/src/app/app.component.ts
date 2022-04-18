import {Component, OnInit} from '@angular/core';
import {Content} from "./helper-files/content-interface";
import {RocketService} from "./services/rocket.service";
import {LogUpdateService} from "./log-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'A-Vincent-MyFavouriteRockets';
  getIdContent?: Content;
  constructor(private rocketService: RocketService, private logService: LogUpdateService){}

  ngOnInit(): void {
    this.logService.init();

  }

  btn(id:any) {
    this.rocketService.getIdContent(id).subscribe((getContent: any) => this.getIdContent = getContent);
  }


}
