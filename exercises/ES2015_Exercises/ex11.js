function* makeNames() {

  let firstNames = ["Lars", "Jan", "Ida", "Tine","Thomas"];
  let lastNames = ["Mortensen","Peterson","Obama","Jensen","Hansen"];


  while(true){
obj = {};
obj.firstName = firstNames[Math.floor(Math.random()* firstNames.length)];
obj.lastName = lastNames[Math.floor(Math.random()* firstNames.length)];
yield obj;
  }

}


let index = 0;
for(let name of makeNames()){
  console.log(name);
  if(index++ === 50){
    break;
  }
}
