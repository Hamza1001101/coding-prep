// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(arr = []) {
    this.arr = arr;
  }

  add(item) {
    this.arr.unshift(item);
  }
  remove() {
    let removed = this.arr[this.arr.length - 1];
    this.arr.pop();
    return removed;
  }
} 

module.exports = Queue;
