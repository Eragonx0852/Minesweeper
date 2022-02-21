export interface Tile {
  state: 'flagged' | 'cleared' | 'closed' | 'bomb';
  isMine: boolean;
  neighbourMines: number;
  x: number;
  y: number;
}
