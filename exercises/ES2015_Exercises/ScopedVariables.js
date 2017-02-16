let a = ["Kasper", "Peter", "Hans"];
let b = ["Kasper1", "Peter1", "Hans1"];

for (let i = 0; i < a.length; i++) {
  let x = a[i]
  console.log("First loop" + x);
}
for (let i = 0; i < b.length; i++) {
  let y = b[i]
  console.log("Second loop" + y);
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4