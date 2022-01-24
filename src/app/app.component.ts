import { Component } from '@angular/core';
import { BoardService } from './services/board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minesweeper';

  boardService: BoardService;

  constructor(boardService: BoardService) {
    this.boardService = boardService;
    //setTimeout(() => boardService.generateGame(10,10), 5000)
  }

  resetGame() {
    this.boardService.generateGame(10,10);
  }
}
