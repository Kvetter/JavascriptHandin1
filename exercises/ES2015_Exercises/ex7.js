let fName = "Kurt"
let lName = "Wonnegut";


[ fName, lName ] = [ lName, fName ];

console.log(`First: ${fName}, Last: ${lName}`);


function getPerson(){
  return {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender: "Male",
    email: "xx@x.com",
    phone: "12345",
  }
}

var {email, phone} = getPerson();
