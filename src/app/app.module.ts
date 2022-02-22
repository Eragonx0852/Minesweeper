import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {BoardService} from './services/board.service';
import {CloudFunctionsService} from './services/cloud-functions.service';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireFunctionsModule} from "@angular/fire/compat/functions";


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    HttpClientModule
  ],
  providers: [
    BoardService,
    CloudFunctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
