import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { Tile } from '../interfaces/tile';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boardService: BoardService;
  board:Tile[][] = [];
  constructor() {
    this.boardService = new BoardService()
    this.board = this.boardService.board;
   }

  ngOnInit(): void {
  }

}
