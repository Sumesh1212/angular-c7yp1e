import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from '../Tickets/hello.component';
import { AngularFireModule }from '@angular/fire';
import { AngularFirestoreModule }from '@angular/fire/firestore';
import { AngularFirestore }from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ViewchangeComponent }from '../ViewChange/viewchange.component';
import { ChangeComponent }from '../NewChange/change.component';
import {ChangeService} from '../Shared/change.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule , AngularFireModule.initializeApp(environment.firebaseConfig),],
  declarations: [ AppComponent, HelloComponent ,ViewchangeComponent ,ChangeComponent],
  bootstrap:    [ AppComponent ],
  providers:[ChangeService,AngularFirestore]
})
export class AppModule { }
