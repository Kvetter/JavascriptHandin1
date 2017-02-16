var number = 0;
for (var index = 2; index < process.argv.length; index++) {
  number += +process.argv[index];
  
}

console.log(number);