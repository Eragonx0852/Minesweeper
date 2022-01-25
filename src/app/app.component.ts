import { Component } from '@angular/core';
import { BoardService } from './services/board.service';
import { DatabaseService } from './services/database.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minesweeper';

  constructor(private boardService: BoardService, private db: DatabaseService) { }

  resetGame() {
    this.boardService.generateGame(100, 25);
    this.db.createCollection();
  }
}
