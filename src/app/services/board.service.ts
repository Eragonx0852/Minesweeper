import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tile } from '../interfaces/tile';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  size: number = 10;
  bombs: number = 30;

  board: Tile[][] = [];

  constructor() {

    for (let i: number = 0; i < this.size; i++) {
      this.board[i] = [];

      for (let k: number = 0; k < this.size; k++) {
        this.board[i][k] = this.generateTile(i,k);
      }
    }
  }

  generateTile(a: number, b: number): Tile {
    let tile: Tile = {
      state: 'closed',
      isMine: this.isBomb(),
      neighbourMines: 0,
      x: a,
      y: b,
    };

    return tile;
  }

  isBomb(): boolean {
    if (Math.floor(Math.random() * 100) <= 30) return true;
    return false;
  }

  setNeighbors(tile: Tile) {
    //if (tile.x - 1 >= 0)
  }
}
