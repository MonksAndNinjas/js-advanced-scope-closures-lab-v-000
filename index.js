function produceDrivingRange(blockRange) {
  return function (blockBeg, blockEnd) {
    let start     = blockBeg.slice(0,2);
    let end       = blockEnd.slice(0,2);
    let blockDist = Math.abs(start - end);
    let blockDiff = blockDist - blockRange;

    return blockDiff > 0 ? `${blockDiff} blocks out of range` : `within range by ${Math.abs(blockDiff)}`;
  }
}

function produceTipCalculator(tipPercentage) {
  return function (driveFare) {
    return driveFare * tipPercentage;
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor (name) {
      this.id   = ++DriverId;
      this.name = name;
    }
  }
}
