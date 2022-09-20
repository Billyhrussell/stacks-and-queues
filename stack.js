/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    //if empty list, set newnode as first and last
    if (!this.size) {
      this.top = newNode;
    } else {
      //set top next to new node
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
      //set this.top to new node
    }

    this.size++;

    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    //if length = 0 return undefined
    if (!this.size) throw new Error;
    //if size = 1
    //set head and tail to null
    //return original head
    if (this.size === 1) {
      const oldHead = this.top;
      this.top = null;
      this.size = 0;
      return oldHead.val;
    } else {
      const current = this.top;
      this.top = current.next;
      this.size--;
      return current.val;
    }
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if(!this.size) return null;

    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(!this.size) return true;

    return false;
  }
}

module.exports = Stack;
