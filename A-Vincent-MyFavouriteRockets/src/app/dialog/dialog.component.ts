import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { MessagesService } from "../services/messages.service";
import {ModifyContentComponentComponent} from "../modify-content-component/modify-content-component.component";
import {MatDialogRef} from "@angular/material/dialog";
// import {RocketService} from "../services/rocket.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Output() newRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  //@Output() updateRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  rocket?: Content;

  constructor(private messageService: MessagesService, public dialogRef: MatDialogRef<ModifyContentComponentComponent>) { }


  ngOnInit(): void {}
  addRocket(title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
    this.rocket ={
      title: title,
      description : description,
      creator: creator,
      type: type,
      tags: tags.split(','),
      imgURL: imgURL
    }
    this.newRocketEvent.emit(this.rocket);
    this.messageService.add('Added ' + this.rocket.title);
    //this.dialogRef.close();
  }

  // close(){
  //  this.dialogRef.close();
  // }


}
