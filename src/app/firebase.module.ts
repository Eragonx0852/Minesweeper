import {NgModule} from "@angular/core";
import {environment} from "../environments/environment";

import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  getFirestore,
  provideFirestore
} from "@angular/fire/firestore";
import {connectAuthEmulator, getAuth, provideAuth} from "@angular/fire/auth";
import {connectFunctionsEmulator, getFunctions, provideFunctions} from "@angular/fire/functions";
import {connectStorageEmulator, getStorage, provideStorage} from "@angular/fire/storage";

@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => firestoreEmulator()),
    provideAuth(() => authEmulator()),
    provideFunctions(() => functionsEmulator()),
    provideStorage(() => storageEmulator()),
  ]
})

export class FirebaseModule {
}

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