function stringPrinter( starterString ){
  $('#output').text( starterString )
}

function funnySentence( noun, adjective, verb, adverb ){
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

  stringPrinter(sentence);
};
