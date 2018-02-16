
function produceDrivingRange(blockRange) {
  return function(start, finish) {
    const distance = Math.abs(parseInt(start) - parseInt(finish))
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(bill) {
    return bill * percentage
  }
}
