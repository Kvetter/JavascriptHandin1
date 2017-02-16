var fs = require("fs");

var file = "";
fs.readFile(process.argv[2], function(err, data){
 
  if (err){
      return console.log(err);
  }
    file = data.toString().split('\n').length - 1


  console.log(file)
});


