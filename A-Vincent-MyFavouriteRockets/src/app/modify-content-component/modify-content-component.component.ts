import {Component, EventEmitter, OnInit, Output, Input, Inject} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { MessagesService } from "../services/messages.service";
// import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RocketService} from "../services/rocket.service";
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export interface DialogData {
  newContent: Content;
  tempTags: string;
}

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  //@Output() newRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Input() newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  //@Output() updateRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();

  rockets: Content[];

  constructor(private messageService: MessagesService, public dialog: MatDialog, private rocketService: RocketService) {
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

  openDialog(){
    const dialogRef = this.dialog.open(DialogBox, {
      width: '300px',
      data: this.newContent,

    });
    dialogRef.afterClosed().subscribe((result: DialogData)=>{
      console.log('The dialog was closed', result);
      this.newContent = result.newContent;
      this.addRocketToList(this.newContent);
    })
  }
  getEvent(event: Content){
    console.log(event);

  }

  // addRocket(title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
  //   this.rocket ={
  //     title: title,
  //     description : description,
  //     creator: creator,
  //     type: type,
  //     tags: tags.split(','),
  //     imgURL: imgURL
  //   }
  //   this.newRocketEvent.emit(this.rocket);
  //   this.messageService.add('Added ' + this.rocket.title);
  // }

  // updateRocket(id: string, title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
  //   this.rocket ={
  //     id: parseInt(id),
  //     title: title,
  //     description : description,
  //     creator: creator,
  //     type: type,
  //     tags: tags.split(','),
  //     imgURL: imgURL
  //   }
  //   this.updateRocketEvent.emit(this.rocket);
  //   this.messageService.add('Updated ' + this.rocket.id);
  // }


  //



  // addRocket(title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
  //   this.rocket ={
  //     title: title,
  //     description : description,
  //     creator: creator,
  //     type: type,
  //     tags: tags.split(','),
  //     imgURL: imgURL
  //   }
  //   this.newRocketEvent.emit(this.rocket);
  //   this.messageService.add('Added ' + this.rocket.title);
  // }
  //
  // updateRocket(id: string, title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
  //   this.rocket ={
  //     id: parseInt(id),
  //     title: title,
  //     description : description,
  //     creator: creator,
  //     type: type,
  //     tags: tags.split(','),
  //     imgURL: imgURL
  //   }
  //   this.updateRocketEvent.emit(this.rocket);
  //   this.messageService.add('Updated ' + this.rocket.id);
  // }

}

@Component({

  templateUrl: './dialog-box.html',
})
export class DialogBox {
  rocket?: Content;
  @Output() newRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();

constructor(private messageService: MessagesService, public dialogRef: MatDialogRef<DialogBox>, @Inject(MAT_DIALOG_DATA) public data: Content) {}

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
}
