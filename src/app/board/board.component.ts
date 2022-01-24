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

  constructor(boardService: BoardService) {

   }

  ngOnInit(): void {

  }

}
