import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Tile } from '../interfaces/tile';

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  private size: number = 5;
  private bombs: number = 3;

  private board: Tile[][] = [];
  //board$: Observable<Tile[][]>;

  constructor() {}

  public generateGame(bombs: number, gridSize: number): Tile[][] {
    this.bombs = bombs;
    this.size = gridSize;

    this.generateBoard();
    this.generateMines();
    this.setNeighbors();

    return this.board;
    //this.board$.
  }

  private generateBoard() {
    for (let y = 0; y < this.size; y++) {
      this.board[y] = [];

      for (let x: number = 0; x < this.size; x++) {
        this.board[y][x] = this.generateTile(x, y);
      }
    }
  }

  private generateTile(x: number, y: number): Tile {
    return {
      state: 'closed',
      isMine: false,
      neighbourMines: 0,
      x,
      y,
    };
  }

  private generateMines() {
    for (let b = 0; b < this.bombs; ) {
      const x = this.randomCoordinate();
      const y = this.randomCoordinate();

      if (!this.board[y][x].isMine) {
        this.board[y][x].isMine = true;
        b++;
      }
    }
  }

  private randomCoordinate(): number {
    return Math.floor(Math.random() * this.size);
  }

  private setNeighbors() {
    for (let y = 0; y < this.size; y++)
      for (let x = 0; x < this.size; x++)
        if (!this.board[y][x].isMine)
          this.board[y][x].neighbourMines = this.neighbourSearch(
            this.board[y][x]
          );
  }

  private neighbourSearch(tile: Tile): number {
    let mines = 0;

    for (let y = tile.y - 1; y <= tile.y + 1; y++)
      for (let x = tile.x - 1; x <= tile.x + 1; x++) {
        if (x >= 0 && x < this.size && y >= 0 && y < this.size)
          if (this.board[y][x]?.isMine) mines++;
      }

    return mines;
  }
}

interface example {
  key: String;
}
