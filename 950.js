
var deckRevealedIncreasing = function(deck) {
  let output = []
  let indexPlace = 0

  // sort the input array

  let sortedDeck = deck.sort(function(a,b) {
    return a - b;
  })

  // every other index place should be the initial numbers of the input array

  for (let i = 0; i < deck.length; i++) {
    if (indexPlace < deck.length) {
      output[indexPlace] = sortedDeck[i]
      indexPlace += 2;
    }
  }

  // determine remaining numbers

  let untouchedNums = indexPlace / 2

  // every other empty place in output array is the next number
  let outputArrayIndex = 0;

  for (let j = untouchedNums; j < sortedDeck.length; j++) {
    let counter = 0
    let usedNumber = false;
    while (usedNumber == false) {
      if (!output[outputArrayIndex]) {
        counter ++;
        if (counter == 2) {
          output[outputArrayIndex] = sortedDeck[j];
          usedNumber = true;
        }
      }
      outputArrayIndex ++;
      if (outputArrayIndex == output.length) {
        outputArrayIndex = 0;
      }
    }
  }

  return output;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));