import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore'

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports:
   [  BrowserModule, 
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFirestoreModule,
      FlexLayoutModule,
      MatCardModule, 
      MatButtonModule
   ],
  declarations: [ AppComponent, CardsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
