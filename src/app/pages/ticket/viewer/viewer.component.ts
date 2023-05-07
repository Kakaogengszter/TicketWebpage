import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../../shared/models/Image';
import { TicketService } from '../../../shared/services/ticket.service';
import { TicketimagesService } from '../../../shared/services/ticketimages.service';


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() imageInput?: Image;
  loadedImage: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private ticketService: TicketService, private ticketImagesService: TicketimagesService) { 

  
  }

  ngOnChanges(): void {
    if (this.imageInput?.id) {

    this.ticketImagesService.getAll().subscribe((data: any) => {
      data.forEach((obj: any) => {

        this.ticketService.loadImage(obj.photo_url).subscribe(data => {
          if(obj.description){
            const tempForDesc = obj.description.split(';');
            this.loadedImage.push([data,obj.performer,tempForDesc[0],tempForDesc[1],tempForDesc[2]]);
          }
          
          
        });
      });
    });
    }
  }

  ngOnInit(): void {


   
  }

}
