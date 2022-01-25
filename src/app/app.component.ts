import { Component } from '@angular/core';
import { BoardService } from './services/board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minesweeper';


  constructor(private boardService: BoardService) { }

  resetGame() {
    this.boardService.generateGame(100,25);
  }
}
