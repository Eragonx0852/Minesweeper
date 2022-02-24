import {Component} from '@angular/core';
import {CloudFunctionsService} from './services/cloud-functions.service';
import {FormBuilder} from "@angular/forms";
import {GameService} from "./services/game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minesweeper';

  constructor(private cloudFunctions: CloudFunctionsService, private gameService: GameService) {
    //cloudFunctions.generateGame(6,9);

    gameService.game$?.subscribe(console.log)
  }

  joinGame(gameID: string) {
    this.cloudFunctions.generateGame(10,10).then(console.log).catch(console.log);
    // this.gameService.joinGame(gameID);
    console.log(gameID)
  }
}
