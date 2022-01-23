import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { Tile } from '../interfaces/tile';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
