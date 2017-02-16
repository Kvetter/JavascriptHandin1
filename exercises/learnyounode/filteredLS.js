var fs = require("fs");
var path = require("path");

var dir = "";

fs.readdir(process.argv[2], function(err, list){
if (!err){
  list.forEach(function(element) {
  if (element.toString().endsWith("." + process.argv[3])) {
    console.log(element);
  }
  });
}
});