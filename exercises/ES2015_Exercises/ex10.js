function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length ?
      {value: array[nextIndex++], done: false} :
      {done: true};
    }
  }
}
//Here we can do:
let it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

function makeIterator2(array) {
  var itt= {};
  itt[Symbol.iterator] = function() {
    var nextIndex = 0;
    return {
      next: function () {
        return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {done: true};
      }
    }
  }
  return itt;
}
//Here we can iterate using the for-of syntax:
var it2 = makeIterator2(['yo', 'ya']);
for(let i of it2){
  console.log(i);
}