import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Image } from '../models/Image';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // HTTP

  collectionName = 'TicketImages'

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private storage: AngularFireStorage    
    ) { }

  loadImageMeta(metaUrl: string): Observable<Array<Image>> {
    console.log("LoadImageMetaMethod");
    return this.afs.collection<Image>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string) {
    console.log("LoadImageMethod");
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}
