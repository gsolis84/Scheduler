import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:
   [  BrowserModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFirestoreModule,
      FlexLayoutModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatExpansionModule,
      BrowserAnimationsModule,
      HttpClientModule
   ],
  declarations: [ AppComponent, CardsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
