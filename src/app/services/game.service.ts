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
    this.gamesCollection = collection(firestore, 'games');
    this.game$ = docData(doc(this.gamesCollection, '4IVE5eBbyM5qlYJs69Q0')) as Observable<Board>;
  }

  joinGame(gameID: string) {
    this.game$ = docData(doc(this.gamesCollection, gameID)) as Observable<Board>;
  }

}
