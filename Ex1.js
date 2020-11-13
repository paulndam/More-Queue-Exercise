// Modify the Queue class to create a Deque class. A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of the list. Test your class in a program.

function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.dequeuePriority = dequeuePriority;
  this.empty = empty;
  this.toString = toString;
  this.front = front;
  this.back = back;
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

var theQ = new Queue ();
var p = new Patient ('Andres' + 5);
theQ.enqueue (p);

p = new Patient ('smith' + 4);
theQ.enqueue (p);

p = new Patient ('john' + 7);
theQ.enqueue (p);

p = new Patient ('ryan' + 1);
theQ.enqueue (p);

console.log (theQ.toString ());

currentlyBeenSeen = theQ.front ();
NextToBeenSeen = theQ.back ();

console.log (`patien being treated is ${currentlyBeenSeen.name}`);
console.log (`next patient to be treated is ${NextToBeenSeen.name} `);
console.log (theQ.toString ());
