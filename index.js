function titleCased(tutorials) {
  const titlizedArray = tutorials.map((sentence) => {
    sentenceArray = sentence.split(' ');
    let titlizedSentence = '';
    for (let i = 0; i < sentenceArray.length; i++) {
      const currentWord = sentenceArray[i];
      const firstLetter = currentWord[0].toUpperCase();
      const rest = currentWord.slice(1);
      titlizedSentence += `${firstLetter + rest} `;
    }
    return titlizedSentence.trim();
  });
  return titlizedArray;
}