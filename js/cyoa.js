// var response = prompt("While going on a hike, you come across a split path. Will you go left or right?");
//
// if(response === "left" || response === "Left"){
//     response = prompt("I hope you like long walks.");
// } else if (response === "right" || response === "Right") {
//     response = prompt("You should take the scenic route and go left.");
// } else {
//     alert("Please make a choice.");
// }


function choicePrompt(promptMessage, choice1, choice2, reponse1, reponse2) {
    var response = prompt(promptMessage).toLowerCase();
    if(response === choice1) {
      alert(reponse1);
    } else if(response === choice2) {
      alert(response2);
    } else {
      alert("Invalid input. Please make a choice.");
      return false;
    }
    return true;
}


while(!choicePrompt(
  "While going on a hike, you come across a split path. Will you go left or right?",
  "left", "right",
  "I hope you like long walks.", "You should take the scenic route and go left."
)) {}


while(!choicePrompt(
  "You're walking along gazing at the scenery. Suddenly, you trip and fall down. Don't worry- your clumsy nature comes in handy this time...1) Look around the area, 2) Look for a band-aid.",
  "look around the area", "Look for a band-aid",
  "Hmm...it looks like you found something.", "Lame-o. Is your band-aid \"Hello Kitty\" brand too?"
)) {}


var response = prompt("While looking around the area, you find a box and open it. There's a button inside. 1)Press the button, 2)Dust off the button.");

if(response === "Press the button" || response === "press the button"){
    response = prompt("You are transported to another land.");
} else if (response === "Dust off the button" || response === "dust off the button") {
    response = prompt("You accidently press the button and you are transported to another land.");
} else {
    alert("Please make a choice.");
}

var response = prompt("You look around and everything looks the same...except now there's an old man standing a few feet away. He motions you to come there. 1) Walk Over, 2) Ignore Him. ");

if(response === "Walk Over" || response === "walk over"){
    response = prompt('The old man explains that he is a high ranked wizard in this land.');
} else if (response === "Ignore Him" || response === "ignore him") {
    response = prompt("The old man wacks you with his cane.");
} else {
    alert("Please make a choice.");
}

var response = prompt("The old man says he has a quest for you. He needs to you find a lost item for him. In exchange, he will grant you one wish. 1) Accept the challenge, 2) Nah, I'm good.");

if(response === "Accept the challenge" || response === "accept the challenge"){
    response = prompt('The old man hands you a map.');
} else if (response === "Nah, I'm good" || response === "nah, I'm good") {
    response = prompt("The old man smacks you with his cane.");
} else {
    alert("Please make a choice.");
}

var response = prompt("You look at the map and realize it's a map of Six Flags. The old man laughs at you and smacks you with his cane. You... 1) Wake up, 2) Smack the old man");

if(response === "Wake up" || response === "wake up"){
    response = prompt('You realize you fell really hard before and have been passed out this whole time.');
} else if (response === "Smack the old man" || response === "smack the old man") {
    response = prompt("You wake up waving your hands around. You realize you fell really hard before and have been passed out this whole time.");
} else {
    alert("Please make a choice.");
}
