import {Component} from '@angular/core';
import {FunctionsService} from './services/firebase/functions.service';
import {GameService} from "./services/game.service";
import {AuthenticationService} from "./services/firebase/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minesweeper';

  constructor(private cloudFunctions: FunctionsService, private gameService: GameService, public authService:AuthenticationService) {
    gameService.game$?.subscribe(console.log);
    authService.user$?.subscribe(console.log);

  }

  joinGame(gameID: string) {
    if (gameID.trim().length != 20)
      this.cloudFunctions.generateGame(10, 10).then(console.log).catch(console.log);
    else
      this.gameService.joinGame(gameID);
  }

  showProfile() {

  }
}
