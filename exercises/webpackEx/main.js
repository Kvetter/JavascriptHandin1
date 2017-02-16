
require('./main.css');

//setTimeout(() => alert(`Hello there from ${name}`), 300);

function Person(fn, ln, s) {
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}

const persons = [
  new Person("Kurt", "Wonnegut", "Socker"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Socker"),
]

const table = makeTable(persons);

function makeTable(arr){
   return arr.map(function(current, index, arr){
    return ` <tr> <th> ${_.startCase(arr)} </th> </tr>`;
  })
}

document.getElementById('my-table').innerHTML = table;
