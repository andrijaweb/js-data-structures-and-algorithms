class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.len = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) this.first = this.last = newNode;
    else {
      const curFirst = this.first;
      this.first = newNode;
      this.first.next = curFirst;
    }

    return ++this.len;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(6);
stack.push(3);
stack.push(67);
stack.push(33);
stack.push(21);

console.log(stack);
