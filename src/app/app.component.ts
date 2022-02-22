import {Component} from '@angular/core';
import {CloudFunctionsService} from './services/cloud-functions.service';
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minesweeper';

  constructor(private cloudFunctions: CloudFunctionsService, private firestore: AngularFirestore) {
  }

  resetGame() {
    // const body = {
    //   firstNumber: 5,
    //   secondNumber: 4
    // };

    //this.firestore.collection('random').add({random:'random'});

    this.cloudFunctions.generateGame(4,2).then(console.log).catch(console.log);

    // this.http.post(environment.cloudFunction.createGame, body)
    //   .subscribe((response: Partial<CreateGameResponse>) => {
    //     console.log(response.id)
    //   });

  }


}
