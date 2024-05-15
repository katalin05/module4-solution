// script.js
(function () {
  // Loop through the names array and greet each name
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    // Check the first letter of the name to decide which greeting to use
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(name); // Use byeSpeaker for names starting with 'j'
    } else {
      helloSpeaker.speak(name); // Use helloSpeaker for other names
    }
  }
