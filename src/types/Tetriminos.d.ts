type Matrix = number[][];

type TetriminosType = 'I' | 'L' | 'J' | 'Z' | 'S' | 'O' | 'T';

type BlockType  = {
  pos: number[],
  shape: number[][],
  type: TetriminosType,
};

type BlockOption = {
  pos?: number[],
  shape?: number[][],
  type: TetriminosType,
};

type CellStateType = 0 | 1 | 2; // FREE | OCCUPIED | BLOCKED
