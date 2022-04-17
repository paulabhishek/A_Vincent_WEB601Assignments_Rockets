import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private _snackBar: MatSnackBar) {}
    public init(){
      this.updates.versionUpdates.subscribe(event => {
        switch (event.type) {
          case 'VERSION_DETECTED':
            console.log(`Downloading new app version:
            ${event.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version:
            ${event.currentVersion.hash}`);
            console.log(`New app version ready for use:
            ${event.latestVersion.hash}`);
            break;
        } });
    }
  openUpdate() {
    let message = "There is an Update available!";
    let action = "Update";
    let click = this._snackBar.open(message, action);

    click.onAction().subscribe(() => {
      console.log('Updating...');
      this.update();
      click.dismiss();
    });
  }
  update() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }

  }
