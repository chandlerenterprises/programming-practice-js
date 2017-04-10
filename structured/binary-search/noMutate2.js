//var arr = ['apple', 'banana', 'cherry', 'dates', 'dog', 'eggs', 'figs', 'zebra'];
var fs = require('fs');
var moment = require('moment');
var arr = fs.readFileSync('words.txt').toString().split("\n");
var leftIdx = 0;
var rightIdx = arr.length - 1;
var testCount = 0;

console.log(noMutate(arr, 'youthful'));

function noMutate(arr, searchFor) {
  
  ++testCount;
  
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
      return rightIdx;
    }
  }

  var offSetRightIdx = rightIdx + 1;
  var medianIdx = Math.floor(offSetRightIdx / 2);
  var medianVal = arr[medianIdx];
  
  if(medianVal == searchFor) {
    return medianIdx;
  }
  if(searchFor > medianVal) {
    console.log('greater');
    leftIdx = medianIdx;
    if(rightIdx - leftIdx == 2) {
      return rightIdx;
    }
  } else {
    console.log('lesser')
    rightIdx = medianIdx;
  }
  
  if(testCount <= 10) {

    console.log('left' + leftIdx + ' ' + 'right' + rightIdx);
    return noMutate(arr, searchFor);  

  }
}

