import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {collection, doc, docData, Firestore} from "@angular/fire/firestore";
import {Board} from "../interfaces/game.interface";
import {CollectionReference, DocumentData} from "@firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class GameService {

  game$: Observable<Board>;
  gamesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.gamesCollection = collection(this.firestore, 'games');
    this.game$ = docData(doc(this.gamesCollection, '')) as Observable<Board>;
  }

  joinGame(gameID: string) {
    this.game$ = docData(doc(this.gamesCollection, '')) as Observable<Board>;
  }

}
