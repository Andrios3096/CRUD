import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../../services/firestore.service';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  constructor(public _FirestoreService:FirestoreService) {
     
    this._FirestoreService.getHeroes().subscribe(heroes => {
      console.log(heroes);
    })
  }

  ngOnInit() {
    
  }

}
