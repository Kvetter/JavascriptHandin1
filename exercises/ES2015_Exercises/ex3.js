function Numbers(numbs) {

  this.nums = numbs;
  this.fives = [];
  var self = this;
  this.nums.forEach((v) => {
    if (v % 5 === 0) {
      //"this" is bound to the function forEach and not to "Numbers"
      //this.fives.push(v);
      this.fives.push(v);
    }
  });
}

// if we don't put a "new" tag infront, it wont make a instance of the object;
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);
