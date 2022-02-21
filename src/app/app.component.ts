import {Component} from '@angular/core';
import {BoardService} from './services/board.service';
import {DatabaseService} from './services/database.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minesweeper';

  constructor(private boardService: BoardService, private db: DatabaseService, private http: HttpClient) {
  }

  async resetGame() {
    this.boardService.generateGame(100, 25);

    let headers = new HttpHeaders().set('Access-Control-Allow-Origin','*')

    this.http.post('https://us-central1-minesweeper-a74df.cloudfunctions.net/generateGame', {
      size: 5,
      mines: 4
    }).subscribe(value => console.log(value))

  }


}
