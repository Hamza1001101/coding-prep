// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack'); 

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.temp = new Stack();
  }
  add(item) {
    while (this.s1.peek()) {
      this.temp.push(this.s1.pop());
    }
    this.temp.push(item);
    while (this.temp.peek()) {
      this.s1.push(this.temp.pop());
    }
  }

  remove() {
    if (!this.s1.peek()) return undefined;
    else return this.s1.pop();
  }
  peek() {
    return this.s1.peek();
  }
}

module.exports = Queue;
