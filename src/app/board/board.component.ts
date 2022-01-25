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

  imgSource = '../../assets/closed.png';

  boardService: BoardService;

  constructor(boardService: BoardService) {
    this.boardService = boardService;
    this.boardService.board$.subscribe(board => this.board = board);
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

  onClick(tile: Tile): void {
    if (tile.state == 'cleared') return;
    tile.state = tile.isMine ? 'bomb' : 'cleared';
    this.boardService.clearedNeigbourSearch(tile);
  }

  onRightClick(tile: Tile) {
    if (tile.state != 'cleared')
      tile.state = 'flagged';
    return false;
  }

}
