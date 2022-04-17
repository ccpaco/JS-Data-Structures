// assuming unsortedList is a js array which may have duplicates
// original
function sortList(unsortedList) {
  for (let i = 0; i < unsortedList.length; i++) {
    let current = i;
    while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
      let temp = unsortedList[current];
      unsortedList[current] = unsortedList[current - 1];
      unsortedList[current - 1] = temp;
      current -= 1;
    }
  }
  return unsortedList;
}
/* 
    Explanation: the most important part of this is the while statement. 
    current -=1 will parse left to search for any prev. values that are less.
    This algorithm starts on the second element in the array (current > 0 means it skips unsortedList[0]) 
    and compares it to unsortedList[current - 1], immediate left element. If it's less, we create temp to hold value of current element, 
    overwrite the current element to copy the previous element, and then assign the temp value to the previous element.
    Again, current-- sets the algo to move left in the array
*/

// version 2 of insert sort. Example from blog, understand the flow!
function sortList(unsortedList) {
  for (i = 1; i < unsortedList.length; i++) {
    let current = unsortedList[i];
    let prev = i - 1;
    while (prev > -1 && current < unsortedList[prev]) {
      unsortedList[prev + 1] = unsortedList[prev];
      prev--;
    }
    unsortedList[prev + 1] = current;
  }
  return unsortedList;
}

/* 

Probelm: find the missing letters (a-z) given a collection of unordered
lowercase characters. There are no duplicates. 

*/

let input = "bshdizme".split(""); //random letters split into array

function missingAlphabet(input) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let sortInput = input.sort();
  let answer = [];

  for (let i = 0; i < alphabet.length; i++) {
    if (!sortInput.includes(alphabet[i])) {
      answer.push(alphabet[i]);
    }
  }
  return answer;
}

missingAlphabet(input);
