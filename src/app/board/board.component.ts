import { Component, OnInit } from '@angular/core';
import { Tile } from '../interfaces/game.interface';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board: Tile[][] = [];

  imgSource = '../../assets/closed.png';

  constructor(private boardService: GameService) {}

  ngOnInit(): void {}

  getTileColor(neighbourMines: number): string {
    switch (neighbourMines) {
      case 1:
        return 'green';
      case 2:
        return 'blue';
      case 3:
        return 'red';
      case 4:
        return 'brown';
      case 5:
        return 'orange';
      case 6:
        return 'purple';
      case 7:
        return 'pink';
      case 8:
        return 'yellow';
      default:
        return 'white';
    }
  }

  onClick(tile: Tile): void {}

  onRightClick(tile: Tile) {}

  endGame() {
    alert('You have lost!');
  }
}
