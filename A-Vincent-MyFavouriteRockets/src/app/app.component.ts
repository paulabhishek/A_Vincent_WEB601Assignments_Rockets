import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Content} from "./helper-files/content-interface";
import {RocketService} from "./services/rocket.service";
import {LogUpdateService} from "./log-update.service";
import {concat, first, interval} from "rxjs";
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'A-Vincent-MyFavouriteRockets';
  getIdContent?: Content;

  constructor(private rocketService: RocketService, private logService: LogUpdateService, private appRef: ApplicationRef, private updates: SwUpdate){}

  ngOnInit(): void {
    if(navigator.serviceWorker){
      this.logService.init();

      const appIsStable$ = this.appRef.isStable.pipe(
        first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000 /2);
      const everyHourOnceAppIsStable$ =
        concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
        () => this.updates.checkForUpdate());
    }
  }

  btn(id:any) {
    this.rocketService.getIdContent(id).subscribe((getContent: any) => this.getIdContent = getContent);
  }

}
