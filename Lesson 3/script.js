// class Mard {
//     constructor(firstName, lastName, age) {
//         this.first_name = firstName;
//         this.last_name = lastName;
//         this.age = age;
//         greeting("My name is " + firstName + " " + lastName + ", I'm " + age + " years old.");
//     }
//  }


// class Hay extends Mard{
//     super()
//     constructor(firstName, lastName, age, mazeriGuyn, bardzrutyun){
//         this.mazeri_Guyn = mazeriGuyn;
//         this.bardzrutyun = bardzrutyun;
//         greeting("My name is " + firstName + " " + lastName + ", I'm " + age + " years old, I have " + mazeriGuyn + " hair, and I'm " + bardzrutyun + " sm tall.");
//     }
// }

// let Mard1 = new Mard("Movses", "Movsisyan", 28);
// let Hay1 = new Hay("David", "Vanyan", 14, "sev", 155);















// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("<h1>Hello world</h1>");
// });


// app.get("/:name", function(req, res){
//     var name = req.params.name;
//     res.send("<h1>Hello " + name +"</h1>");
// });

// app.listen(3001, function(){
//     console.log("Example is running on port 3001");
// });









// var os = require("os");
// var message = "The platform is ";
// function main(){
//     console.log(message + os.platform());
// }
// main();



// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();


// module.exports = class Square {
//     constructor(side) {
//         this.side = side;
//     }		
//     getArea() {
//         return this.side * this.side;
//     }
// };


var fs = require('fs');

function main(){
   var file  = "hello.txt";
   fs.appendFileSync(file, "Hello world\n");
}
main();


var fs = require('fs');

function main(){
   fs.writeFile("hello.txt", "Hello world\n", function(err){
       console.log("fs.writeFile ended");
   });
   console.log("fs.writeFile");
}
main();



var fs = require('fs');

function main() {
   fs.writeFileSync("hello.txt", "Hello world\n");
   console.log("fs.writeFile");
}
main();



var fs = require('fs');
var dummyText = "Apple yep";

function main() {
   fs.writeFileSync("dummytext.txt", dummyText);
   var text = fs.readFileSync("dummytext.txt").toString();
   console.log(dummyText == text);
   console.log(text);
   fs.writeFileSync("undummytext.txt",
       text.replace("Apple", "Microsoft")
   );
}
main();
