import { environment } from '../environments/environment';

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

// Services
import { GameService } from './services/game.service';
import { CloudFunctionsService } from './services/cloud-functions.service';

// Firebase Libraries
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
} from '@angular/fire/firestore';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';
import {
  provideAuth,
  getAuth,
  connectAuthEmulator,
} from '@angular/fire/auth';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';

@NgModule({
  declarations: [AppComponent, BoardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => firestoreEmulator()),
    provideAuth(() => authEmulator()),
    provideFunctions(() => functionsEmulator()),
    provideStorage(() => storageEmulator()),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [GameService, CloudFunctionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}


// Configuring the environment variables for the firebase emulators

const firestoreEmulator = () => {
  const firestore = getFirestore();
  if (environment.production) return firestore;
  const {host, port} = environment.emulators.firestore;
  connectFirestoreEmulator(firestore, host, port);
  enableIndexedDbPersistence(firestore);
  return firestore;
};

const storageEmulator = () => {
  const storage = getStorage();
  if (environment.production) return storage;
  const {host, port} = environment.emulators.storage;
  connectStorageEmulator(storage, host, port);
  return storage;
};

const authEmulator = () => {
  const auth = getAuth();
  if (environment.production) return auth;
  const {uri} = environment.emulators.auth;
  connectAuthEmulator(auth, uri);
  return auth;
};

const functionsEmulator = () => {
  const functions = getFunctions();
  if (environment.production) return functions;
  const {host, port} = environment.emulators.functions;
  connectFunctionsEmulator(functions, host, port);
  return functions;
};
