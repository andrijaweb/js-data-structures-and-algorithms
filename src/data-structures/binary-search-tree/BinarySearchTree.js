class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) return undefined;

      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (val === current.val) return true;
      if (val < current.val) current = current.left;
      else current = current.right;
    }

    return false;
  }

  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    const visited = [];
    const curNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(curNode);

    return visited;
  }

  DFSInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

console.log(tree);
