export interface Tile {
  state: 'flagged' | 'cleared' | 'closed';
  isMine: boolean;
  neighbourMines: number;
  x : number;
  y : number;
}
