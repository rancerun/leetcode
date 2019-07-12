
var deckRevealedIncreasing = function(deck) {

  let outputFunction = (inputArray, indexPlace, outputArray) => {
    let outputArrayIndex = 0;
    if (inputArray.length % 2 == 0) {
      outputArrayIndex = inputArray.length - 1;
    }

    for (let j = indexPlace; j < inputArray.length; j++) {
      let counter = 0;
      let usedNumber = false;
      while (!usedNumber) {
        if (!outputArray[outputArrayIndex]) {
          counter ++;
          if (counter == 2) {
            outputArray[outputArrayIndex] = inputArray[j];
            usedNumber = true;
          }
        }
        outputArrayIndex ++;
        if (outputArrayIndex == outputArray.length) {
          outputArrayIndex = 0;
        }
      }
    }
  }

  let output = [];
  let indexPlace = 0;
  let currentNumIndex = 0;

  let sortedDeck = deck.sort(function(a,b) {
    return a - b;
  })

  output[0] = sortedDeck[0];

  for (let i = 1; i < deck.length; i++) {
    indexPlace += 2;
    if (indexPlace < deck.length) {
      output[indexPlace] = sortedDeck[i]
    } else {
      indexPlace = i;
      break;
    }
  }

  if (deck.length <= 2) {
    return sortedDeck;
  } else if (deck.length % 2 == 0) {
    output[deck.length - 1] = undefined;
    outputFunction(sortedDeck, indexPlace, output);
  } else {
    outputFunction(sortedDeck, indexPlace, output);
  }

  return output;
}

console.log(deckRevealedIncreasing([1,2,3,4,5,6]));