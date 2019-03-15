function titleize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map(function (tutorial) {
  tutorial = tutorial.split(' ');
  for (var i = 0; i < tutorial.length; i++) {
    tutorial[i] = titleize(tutorial[i]);
  }
  return tutorial.join(' ');
});
