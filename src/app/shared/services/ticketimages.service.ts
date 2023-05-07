import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class TicketimagesService {

  collectionName = 'TicketImages';

  constructor(private afs: AngularFirestore) { }

  //CRUD (Create, Read, Update, Delete)

  create(user: Image){
    return this.afs.collection<Image>(this.collectionName).doc(user.id).set(user);
  }

  getAll(){
    //return this.afs.collection('myCollection', ref => ref.where('field', '==', 'value')).valueChanges();
    
    return this.afs.collection<Image>(this.collectionName).valueChanges();
  }

  update(id: string, data: Partial<Image>) {
    return this.afs.collection<Image>(this.collectionName).doc(id).update(data);
  }
  
  delete(id: string) {
    return this.afs.collection<Image>(this.collectionName).doc(id).delete();
  }
}
