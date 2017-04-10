//var arr = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'zebra'];
var fs = require('fs');
var arr = fs.readFileSync('words.txt').toString().split("\n");

var leftIdx = 0;
var rightIdx = arr.length - 1;
var offset = 0;
var testCount = 0;
module.exports = function(arr, searchFor) {
  
  ++testCount
  
  if(rightIdx == 1) {
    if(arr[leftIdx] == searchFor) {
      return 0;
    } else {
      return -1;
    }
  }
  if(rightIdx % 2 == 0) {
    if(arr[rightIdx] != searchFor) {
      rightIdx = rightIdx - 1;
    } else  {
      offset = offset + rightIdx;
      return offset;
    }
  }
  var offSetRightIdx = rightIdx + 1;
  var medianIdx = Math.floor(offSetRightIdx / 2);
  var medianVal = arr[medianIdx];
  if(medianVal == searchFor) {
    var medianOffset = offSetRightIdx / 2;
    offset = offset + medianOffset;
    return offset;
  }
  if(searchFor > medianVal) {
    leftIdx = medianIdx;
    if(rightIdx - leftIdx == 2) {
      return rightIdx;
    }
  } else {
    rightIdx = medianIdx;
  }
  return module.exports(arr, searchFor);  
}

console.log(module.exports(arr, 'aboard'))
