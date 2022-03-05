import {Component} from '@angular/core';
import {CloudFunctionsService} from './services/cloud-functions.service';
import {GameService} from "./services/game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minesweeper';

  constructor(private cloudFunctions: CloudFunctionsService, private gameService: GameService) {
    gameService.game$?.subscribe(console.log)
  }

  joinGame(gameID: string) {
    if (gameID.trim().length != 20)
      this.cloudFunctions.generateGame(10,10).then(console.log).catch(console.log);
    else
      this.gameService.joinGame(gameID);
  }
}
