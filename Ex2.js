// Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.

function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.dequeuePriority = dequeuePriority;
  this.empty = empty;
  this.toString = toString;
  this.front = front;
  this.back = back;
  this.length = length;
}

function enqueue (element) {
  this.dataStore.push (element);
}
function dequeue () {
  return this.dataStore.shift ();
}
// checking and examing the front and back or our queue

function front () {
  return this.dataStore[0];
}
function back () {
  return this.dataStore[this.dataStore.length - 1];
}

function Patient (name, code) {
  this.name = name;
  this.code = code;
}
function dequeuePriority () {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice (entry, 1);
}

function toString () {
  getStr = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    getStr += this.dataStore[i].name + 'code' + this.dataStore[i].code + '\n';
  }
  return getStr;
}

function empty () {
  if (this.dataStore.length === 0) {
    return `Queue is Empty`;
  } else {
    return `Queue is not empty`;
  }
}

function length () {
  return this.front;
}

function Palindrome (word) {
  var queue = new Queue ();

  for (var i = 0; i < word.length; i++) {
    queue.enqueue (word[i]);
  }

  var newWord = '';
  while (queue.length () > 0) {
    newWord += queue.dequeue ();
  }

  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}

var word = 'hello';
if (Palindrome (word)) {
  console.log (`${word} is a palindrome`);
} else {
  console.log (`${word} is not a palindrome`);
}

word = 'dad';
if (Palindrome (word)) {
  console.log (`${word} is a palindrome`);
} else {
  console.log (`${word} is not a palindrome`);
}
