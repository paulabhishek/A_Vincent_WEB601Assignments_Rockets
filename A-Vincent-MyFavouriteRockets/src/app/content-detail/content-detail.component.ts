import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { RocketService } from '../services/rocket.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  id?:number;
  rocket?: Content;

  constructor(private route: ActivatedRoute, private rocketService: RocketService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? '0');
      this.rocketService.getIdContent(this.id).subscribe(
        (c) =>{
          this.rocket = c;
          this.messageService.add('Loading.. ' +this.rocket.title + ' at ID ' +this.rocket.id);
        }
      );
    });
  }

}
