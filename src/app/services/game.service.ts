import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {collection, doc, docData, Firestore} from "@angular/fire/firestore";
import {Board} from "../interfaces/game.interface";
import {CollectionReference} from "@firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class GameService {

  game$: BehaviorSubject<Board>;
  gamesCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.gamesCollection = collection(firestore, 'games');
    this.game$ = new BehaviorSubject<Board>({})
  }

  joinGame(gameID: string) {
    docData(doc(this.gamesCollection, gameID)).subscribe(board => {
      this.game$.next(board as Board)
    });
    console.log("is this shit working???");
  }

}
