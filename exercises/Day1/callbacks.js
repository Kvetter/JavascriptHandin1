

let name = ["Kasper", "Hazem", "Phillip"];

let names = name.filter((name)=> {
  return name.length >= 6;
});

console.log(names);


let rows = names.map((name)=> {
  return "<td>" + name + "</td>";
})

// let rowStr = rows.join(" ");

let table = `<table><tbody> ${rows} </tbody></table>`

console.log(table);