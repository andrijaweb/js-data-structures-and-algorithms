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
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");
