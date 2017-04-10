//var arr = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'eggs', 'grapes'];
var fs = require('fs');
var arr = fs.readFileSync('words.txt').toString().split("\n");
var offset = 0;
var left;
var right = arr.length - 1;

module.exports = function(arr, searchFor) {
  
  if(right % 2 == 0) {
    if(searchFor == arr[right]){
      //
    }
  }
  
  var medianIdx = Math.floor(arr.length / 2); //round down from half of even array using length
  var medianVal = arr[medianIdx]; //using the +1 offset of indexies you can always find the center val
 
}

console.log(module.exports(arr, 'afford'))


/*apple
banana
cherry
dates
dog
eggs
figs
zebra*/