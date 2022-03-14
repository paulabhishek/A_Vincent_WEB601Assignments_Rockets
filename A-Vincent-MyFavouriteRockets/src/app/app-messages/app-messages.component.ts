import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
