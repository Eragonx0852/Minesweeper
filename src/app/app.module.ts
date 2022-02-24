import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';

import {
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  getFirestore,
  provideFirestore
} from '@angular/fire/firestore';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {connectFunctionsEmulator, getFunctions, provideFunctions} from "@angular/fire/functions";

import {GameService} from './services/game.service';
import {CloudFunctionsService} from './services/cloud-functions.service';
import {HttpClientModule} from "@angular/common/http";

import {ReactiveFormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_DATABASE_EMULATOR } from '@angular/fire/compat/database';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      const firestore = getFirestore();
      // if (environment.production)
      //   return firestore;

      connectFirestoreEmulator(firestore, 'localhost', 8080);
      enableIndexedDbPersistence(firestore);
      return firestore;
    }),
    //provideAuth(() => getAuth()),
    provideFunctions(() => {
      const functions = getFunctions();
      // if (environment.production)
      //   return functions;

      connectFunctionsEmulator(functions, 'localhost', 5001);
      return functions;
    }),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    GameService,
    CloudFunctionsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
