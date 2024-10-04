class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.len = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.len;
  }

  dequeue() {
    if (!this.first) return null;

    const removedNode = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;

    this.len--;
    return removedNode.val;
  }
}

const queue = new Queue();
queue.enqueue("a");
queue.enqueue("w");
queue.enqueue("f");
queue.enqueue("b");
queue.enqueue("k");
queue.enqueue("g");
