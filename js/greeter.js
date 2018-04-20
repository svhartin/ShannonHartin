// var name = prompt('Hi there! What is your name?');
var firstName = prompt("Hi there! What's your first name?");
var lastName = prompt("What's your last name?");
var output = document.querySelector('#greeting');

var checkName = function() {
if(firstName && lastName) {
  output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + "!</p>";
} else {
  firstName = prompt('What is your first name?');
  lastName = prompt('What is your last name?');
}
checkName();
}


//   output.innerHTML = <p>"Thanks for visiting, " + firstName + " " + lastName + "."</p>
// } else {
//   output.innerHTML = <p>"Please tell us your name!"</p>
//   }
// checkName()
// }
// var checkName = function() {
// if(name === "") {
//   name = prompt('What is your name, for real this time?');
//   checkName(); //repeats until a name exists
//   }
//
// }
//
// checkName(); //kicks off the name checking the first time
// alert('Hello, ' + name);
// output.innerHTML = "<p>Thanks for visiting, " + name + "!</p>";
