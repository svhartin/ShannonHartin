
//exercise-1//
var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

//exercise-2//

var n = 15;
var outputTarget = document.querySelector("#exercise-5");
var outputHtml = "<ul>";

while (n > 0) {
    console.log(n);
    if ( n % 2 === 0) {
        outputHtml += "<li>even</li>";
    } else {
        outputHtml += "<li>odd</li>";
    }
    n--;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

//exercise-3//

var n = 1;
var outputTarget = document.querySelector("#exercise-6");
var outputHtml = "<ul>";

while (n <= 100) {
    if(n % 3 === 0 && n % 5 == 0){
        console.log("FizzBuzz");
        outputHtml += "<li>FizzBuzz</li>";
    } else if (n % 3 === 0) {
        console.log("Fizz");
        outputHtml += "<li>Fizz</li>";
    } else if (n % 5 === 0) {
        console.log("Buzz");
        outputHtml += "<li>Buzz</li>";
    } else {
        console.log(n);
        outputHtml += "<li>" + n + "</li>";
    }

    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;
