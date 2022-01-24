import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-harmful-idiot',
  templateUrl: './harmful-idiot.component.html',
  styleUrls: ['./harmful-idiot.component.scss']
})
export class HarmfulIdiotComponent implements OnInit {

  boardService: BoardService;

  constructor(boardService: BoardService) {
    this.boardService = boardService;

  }

  ngOnInit(): void {
    setTimeout(() => {this.boardService.board = []}, 6000);
  }

}
