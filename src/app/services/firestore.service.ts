import { Injectable } from '@angular/core';
//importaciones para crud firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  heroesCollecion : AngularFirestoreCollection<any>;
  heroes: Observable<any>
  heroesDoc: AngularFirestoreDocument<any>

  constructor(public _AngularFirestore:AngularFirestore) { 
    this.heroes = _AngularFirestore.collection('heroes').valueChanges();
  }

  getHeroes(){
    return this.heroes;
  }
}