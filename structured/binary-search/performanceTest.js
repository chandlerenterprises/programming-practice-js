var mutate = require('./index');
var fs = require('fs');
var arr = fs.readFileSync('words.txt').toString().split('\n');

var start = Date.now().valueOf();
var search = 'youthful'
for(var i in arr) {
    if(arr[i] == search) {
        break;
    }
}
var end = Date.now().valueOf();
console.log((end - start)+'ms');

start = Date.now().valueOf();

mutate(arr, search);
end = Date.now().valueOf();
console.log((end - start)+'ms');
