/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    //make new node
    const newNode = new Node(val);
    //if empty list, set newnode as first and last
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //set first next to new node
      this.last.next = newNode;
      //set this.first to new node
      this.last = newNode;
    }

    this.size++;

    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    //if length = 0 return undefined
    if (!this.size) throw new Error;
    //if size = 1
    //set head and tail to null
    //return original head
    if (this.size === 1) {
      const oldHead = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return oldHead.val;
    } else {
      const current = this.first;
      this.first = current.next;
      this.size--;
      return current.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(!this.size) return null;

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.size) return true;

    return false;
  }
}

module.exports = Queue;
