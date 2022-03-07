import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css'],
})
export class CreateContentComponent implements OnInit {
  @Output() newRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;
  testPass?: boolean;
  error?: string;

  @ViewChild('id') Id: any;
  @ViewChild('title') Title: any;
  @ViewChild('description') Description: any;
  @ViewChild('creator') Creator: any;
  @ViewChild('image') Image: any;
  @ViewChild('type') Type: any;
  @ViewChild('tags') Tags: any;

  constructor() {}

  ngOnInit(): void {}
  addRockets(
    id: string,
    title: string,
    description: string,
    creator: string,
    image: string,
    type: string,
    tag: string
  ): void {
    this.newContent = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: image,
      type: type,
      tags: tag.split(','),
    };
    if (
      this.newContent != null &&
      this.newContent.id.toString() != '' &&
      this.newContent.title != '' &&
      this.newContent.description != '' &&
      this.newContent.creator != ''
    ) {
      this.newRocketEvent.emit(this.newContent);
      this.testPass = true;
    } else {
      this.testPass = false;
    }

    let thePromise = new Promise((success, fail) => {
      if (this.testPass) {
        success(` The addition "${title}" is successful `);
      } else {
        fail('The addition failed!');
      }
    });

    thePromise
      .then((success) => {
        console.log(success);
        this.Id.nativeElement.value = '';
        this.Title.nativeElement.value = '';
        this.Description.nativeElement.value = '';
        this.Creator.nativeElement.value = '';
        this.Image.nativeElement.value = '';
        this.Type.nativeElement.value = '';
        this.Tags.nativeElement.value = '';
        this.error = '';
      })
      .catch((fail: any) => {
        this.error = fail;
        console.log(this.error);
      });
  }
}
