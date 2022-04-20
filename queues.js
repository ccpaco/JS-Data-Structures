// visualizing how a queue would work in JavaScript
// Normally global variables are frowned upon, but it's great to learn the nuances of JS.

const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function queuePractice(arr) {
  return arr.unshift("a", 1);
}

queuePractice(input);

// pass the array to add to, and any amount of items
function enqueManual(array, ...items) {
  array.unshift(...items);
  return array;
}

enqueManual(input, "a", "b", "c", "d");

//returns 1 item from front
function dequeueManual(array) {
  return array.shift();
}

dequeueManual(input);
