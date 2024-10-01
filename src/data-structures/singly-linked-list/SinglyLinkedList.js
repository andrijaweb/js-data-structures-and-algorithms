class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  // push method - adding a new node to the end of the linked list!
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    this.length--;

    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== i) {
      counter++;
      current = current.next;
    }

    return current;
  }

  set(i, val) {
    const node = this.get(i);

    if (!node) return false;

    node.val = val;
    return true;
  }

  insert(i, val) {
    if (i < 0 || i >= this.length) return false;
    if (i === this.length) return !!this.push(val);
    if (i === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    const previous = this.get(i - 1);

    [previous.next, newNode] = [newNode, previous.next];

    this.length++;

    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === this.length) return this.pop();
    if (i === 0) return this.shift();

    const prevNode = this.get(i - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }
}

const list = new SinglyLinkedList();
list.push(100);
list.push(101);
list.push(102);
list.push(103);
list.remove(0);

console.log(list);
