import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { Tile } from '../interfaces/tile';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {


  board: Tile[][] = [];

  imgSource = '../../assets/clear.png';

  constructor(boardService: BoardService) {
    this.board = boardService.generateGame(10,10);
   }

  ngOnInit(): void {

  }

  getTileColor(neighbourMines: number): string {
    switch (neighbourMines) {
      case 1: return "green";
      case 2: return "blue";
      case 3: return "red";
      case 4: return "brown";
      case 5: return "orange";
      case 6: return "purple";
      case 7: return "pink";
      case 8: return "yellow";
      default: return "white";
    }
  }

  onClick(tile: Tile) {
    if (tile.isMine) tile.state = 'bomb'
    else tile.state = 'cleared'
  }

  onRightClick(tile: Tile) {
    if (tile.state != 'cleared') tile.state = 'flagged';
    return false;
  }

}
