// let contactArray = ['e-mail: svhartin@gmail.com', 'phone: 888-888-8888']
// contactArray[0]
// let lastOne = contactArray[1]
//
// contactArray.push("Address: 101 Lee St Chattanooga, TN 37434", "http://github.com")
// var extraContact = contactArray.pop()
//
// contactArray.unshift("Contact Information:")
// var dailyInsp = .shift()

let contactArray = ["E-mail me", "Call Me", "Write Me"]
let outputHtml = "<ul>"

function appendStrings(array, element) {
for(let x= 0; x < array.length; x++){
    outputHtml += '<' + element + '>'+ array[x] + '</' + element + '>'
}

outputHtml += '</ul>'
$('#contact-info').html(outputHtml)
}
appendStrings(contactArray);
