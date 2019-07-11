
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

  for (let j = untouchedNums; j < deck.length; j++) {
    let counter = 0;
    for (let k = 0; k < output.length; k++) {
      if (!output[k]) {
        counter ++;
        if (counter == 2) {
          output[k] = sortedDeck[j];
          counter = 0;
        }
      }
    }
  }

  return output;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));