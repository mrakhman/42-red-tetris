import _ from 'lodash';

import { blockShape, initialPos, blankLine, cellState } from '/client/constants/tetriminos.ts';

class Block {
  pos: number[];
  shape: number[][];
  type: TetriminosType;
  timeStamp: number;

  constructor(option: BlockOption) {
    this.type = option.type;

    if (!option.timeStamp) {
      this.timeStamp = Date.now();
    } else {
      this.timeStamp = option.timeStamp;
    }
    if (!option.shape) {
      this.shape = blockShape[this.type];
    } else {
      this.shape = option.shape;
    }
    if (!option.pos) {
      this.pos = initialPos[this.type];
    } else this.pos = option.pos;
  }
  rotate(): Block {
    const shape = this.shape;
    const result: number[][] = shape[0].map((val, index) => shape.map(row => row[index]).reverse());
    return new Block({
      shape: result,
      type: this.type,
      pos: this.pos,
      timeStamp: this.timeStamp,
    });
  }
  fall(n = 1): Block {
    return new Block({
      shape: this.shape,
      type: this.type,
      pos: [this.pos[0] + n, this.pos[1]],
      timeStamp: Date.now(),
    });
  }
  right(): Block {
    return new Block({
      shape: this.shape,
      type: this.type,
      pos: [this.pos[0], this.pos[1] + 1],
      timeStamp: this.timeStamp,
    });
  }
  left(): Block {
    return new Block({
      shape: this.shape,
      type: this.type,
      pos: [this.pos[0], this.pos[1] - 1],
      timeStamp: this.timeStamp,
    });
  }
  drop(matrix: Matrix): Block {
    let newState = new Block({ type: this.type, pos: this.pos, shape: this.shape });
    while (newState.fall().isValid(matrix)) { 
      newState = newState.fall();
    }
    return newState;
  }
  getBlockPos(): number[][] {
    const positions: number[][] = [];
    _.map(this.shape, (row, rowIndex) =>
      _.map(row, (val, colIndex) => { 
        if (val) positions.push([rowIndex + this.pos[0], colIndex + this.pos[1]]);
      }));
    return positions;
  }
  getCorner(): { left: number, top: number, right: number, bottom: number } { 
    const rows = _.map(this.getBlockPos(), ([row]) => row);
    const cols = _.map(this.getBlockPos(), ([, col]) => col);
    return {
      left: _.min(cols) ?? 0,
      top: _.min(rows) ?? 0,
      right: _.max(cols) ?? 0,
      bottom: _.max(rows) ?? 0,
    };
  }
  isBlock(pos: number[]): boolean { 
    return _.find(this.getBlockPos(), (shapePos) => _.isEqual(shapePos, pos)) !== undefined;
  }
  isValid(matrix: Matrix): boolean { 
    const hitBlock = _.find(this.getBlockPos(), ([row, col]) => matrix?.[row]?.[col] === cellState.BLOCKED || matrix?.[row]?.[col] === cellState.OCCUPIED);
    const { left, right, bottom } = this.getCorner();
    return bottom < 20
      && left >= 0
      && right < 10
      && !hitBlock;
  }
  printBlock(matrix: Matrix): Matrix { 
    const newMatrix = _.cloneDeep(matrix);
    _.map(this.getBlockPos(), (pos) => {
      if (pos[0] >= 0 && pos[0] < _.size(newMatrix)
        && pos[1] >= 0 && pos[1] < _.size(newMatrix[0])) {
        newMatrix[pos[0]][pos[1]] = cellState.OCCUPIED;
      }
    });
    return newMatrix;
  }
  destroyBlock(matrix: Matrix): { newMatrix: Matrix, deletedRows: number} { // TODO: mistake of excessive socket emit penalty rows is coming from here
    let bottomMatrix: Matrix = [];
    let topMatrix: Matrix = [];
    _.map(matrix, (row) => {
      // Row sum = 10 when row is complete (cellState.OCCUPIED);
      // Row sum > 10 (row sum = 20) when there is a penalty row (because penalty row consists of cellState.BLOCKED = 2)
      if (_.sum(row) < 10 || _.sum(row) > 10) {
        bottomMatrix = _.cloneDeep([...bottomMatrix, row]);
        // TODO: We can send SOCKETS.SPECTER_UPDATE here when bottomMatrix.length === 20
      } else {
        topMatrix = _.cloneDeep([...topMatrix, blankLine]);
      }
    });
    console.log('Destroy', _.cloneDeep([...topMatrix, ...bottomMatrix])); // TODO: rm
    return ({ newMatrix: _.cloneDeep([...topMatrix, ...bottomMatrix]), deletedRows: topMatrix.length });
  }
}

export default Block;
