import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';

import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFunctions, provideFunctions} from "@angular/fire/functions";

import {GameService} from './services/game.service';
import {CloudFunctionsService} from './services/cloud-functions.service';
import {HttpClientModule} from "@angular/common/http";

import {ReactiveFormsModule} from "@angular/forms";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    GameService,
    CloudFunctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
