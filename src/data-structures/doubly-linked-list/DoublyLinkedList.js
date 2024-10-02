class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) return undefined;
    const curTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = curTail.prev;
      this.tail.next = null;
      curTail.prev = null;
    }

    this.length--;
    return curTail;
  }

  shift() {
    if (!this.head) return undefined;

    const curHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = curHead.next;
      this.head.prev = null;
      curHead.next = null;
    }

    this.length--;
    return curHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;
    let counter;
    let currentNode;

    if (i <= this.length / 2) {
      currentNode = this.head;
      counter = 0;

      while (i !== counter) {
        counter++;
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;

      while (i !== counter) {
        counter--;
        currentNode = currentNode.prev;
      }
    }

    return currentNode;
  }
}

const list = new DoublyLinkedList();

list.push(2);
list.push(8);
list.push(1);
list.push(18);
list.push(32);
list.push(22);
list.push(44);
list.pop();
list.shift();
console.log(list.get(4));

console.log(list);
