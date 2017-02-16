function f(x, y, ...rest) {
  let string = ``;
  let count = 1;
  rest.forEach(function (v) {
    string += `rest value ${count++} is a: ${v.constructor.name}\n`
  })
  return `Sum: ${x + y}
  ` + string
}

//console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams));

var chars = [... f(5,2,...restParams)];

//console.log(chars);