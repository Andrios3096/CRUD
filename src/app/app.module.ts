import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//servicio
import { FirestoreService } from "./services/firestore.service";
//

//importaciones para la conexion con firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';


//


@NgModule({
  declarations: [
    AppComponent,
    InsertarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    //importaciones para la conexion con firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
    
    //
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
