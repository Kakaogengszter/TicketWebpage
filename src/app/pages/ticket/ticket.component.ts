import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/Image';
import { TicketService } from '../../shared/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class ticketComponent implements OnInit {

  ticketObject?: Array<Image>;

  chosenImage?: Image;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.loadImageMeta('__credits.json').subscribe((data: Array<Image>) => {
      console.log(data);
      this.ticketObject = data;
    })
  }

  loadImage(imageObject: Image) {
    this.chosenImage = imageObject;
  }

}
