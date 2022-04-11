
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterTypePipe } from './filter-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  DialogBox,
  ModifyContentComponentComponent
} from './modify-content-component/modify-content-component.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from "@angular/material/chips";
import {NgModule} from "@angular/core";
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterTypePipe,
    HoverAffectDirective,
    AppMessagesComponent,
    ModifyContentComponentComponent,
    DialogComponent,
    DialogBox,
    ContentDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 2000
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatBadgeModule,
    MatChipsModule,
    FormsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonToggleModule
  ],
  providers: [
  //   {
  //   provide: MatDialogRef,
  //   useValue: {}
  // }
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // entryComponents: [DialogBox]
})
export class AppModule { }
