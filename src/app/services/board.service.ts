import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tile } from '../interfaces/tile';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  size: number = 5;
  bombs: number = 3;

  board: Tile[][] = [];

  constructor() {
    //set bombs and size here when received
    this.generateBoard();
    this.printBoard();
  }

  generateBoard() {
    for (let i: number = 0; i < this.size; i++) {
      this.board[i] = [];

      for (let k: number = 0; k < this.size; k++) {
        this.board[i][k] = this.generateTile(i,k);
      }
    }

    this.generateMines(this.size);
    this.setNeighbors();
  }

  generateTile(a: number, b: number): Tile {
    let tile: Tile = {
      state: 'closed',
      isMine: false,//this.isBomb(),
      neighbourMines: 0,
      x: a,
      y: b,
    };

    return tile;
  }

  // isBomb(): boolean {
  //   if (Math.floor(Math.random() * 100) <= 30) return true;
  //   return false;
  // }

  generateMines(size:number, ) {
    let a: number = this.bombs
    while (a > 0) {
      let bombx = Math.floor(Math.random()*size)
      let bomby = Math.floor(Math.random()*size)
      console.log('bomb number:'+a+' x:'+bombx+' y:'+bomby);
        if (!this.board[bombx][bomby].isMine) {
          this.board[bombx][bomby].isMine = true;
          a--;
        }
    }
  }

  setNeighbors() {
    for (let i = 0; i < this.size; i++)
      for (let k = 0; k < this.size; k++)
        if (!this.board[i][k].isMine)
          this.board[i][k].neighbourMines =this.neighbourSearch(this.board[i][k])
  }

  neighbourSearch(tile:Tile): number {
    let mines = 0;

    for (let i = tile.x-1; i <= tile.x+1; i++)
      for (let k = tile.y-1; k <= tile.y+1; k++)
      try{
        if (this.getTile(i, k)?.isMine) //this.board.find(tile => tile.x == i && tile.y == k)?
          mines++;
      }
      catch {}

    return mines;
  }

  getTile(x:number, y:number): Tile {
    return this.board[x][y];
  }

  printBoard() {
    console.log(this.board);
  }
}
