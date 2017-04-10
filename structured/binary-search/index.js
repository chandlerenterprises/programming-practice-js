//var arr = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'eggs', 'grapes'];

var offset = 0;

module.exports = function(arr, searchFor) {
  if(!arr[0]) {
    return -1;
  }
  
  //if current array length is even
  if(arr.length % 2 == 0) {
    if(arr[arr.length - 1] != searchFor) {
      arr.pop(); //remove last value in array to create odd length
    } else  {
      var change = arr.length - 1;
      offset = offset + change;
      return offset;
    }
  }

  if(!arr[1] && arr[0]) { //if array is length of 0
    if(arr[0] != searchFor) {
      return -1;
    } else {
      return 0;
    }
  }
  
  var medianIdx = Math.floor(arr.length / 2); //round down from half of even array using length
  var medianVal = arr[medianIdx]; //using the +1 offset of indexies you can always find the center val

  if(medianVal == searchFor) { //check if median is searchfor
    var medianOffset = arr.length - 1;
    medianOffset = medianOffset / 2;
    offset = offset + medianOffset;
    return offset; 
  }

  var previousLength = arr.length;
  
  if(searchFor > medianVal) {
    arr.splice(0, medianIdx);
    var change = previousLength - arr.length;
    offset = offset + change;
  } else {
    arr.splice(medianIdx + 1, arr.length);
  }
  return module.exports(arr, searchFor);  
}

//console.log(module.exports(arr, 'youthful'))


/*apple
banana
cherry
dates
dog
eggs
figs
zebra*/