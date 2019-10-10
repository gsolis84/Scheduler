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
  MatExpansionModule, MatToolbarModule, MatSidenavModule, MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './users/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';

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
      HttpClientModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
   ],
  declarations: [ AppComponent, CardsComponent, LoginComponent, NavigationComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
