class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    let current = this.root;

    if (current === null) {
      this.root = newNode;
      return this;
    }

    while (true) {
      //the right side
      while (current.val < val) {
        //if the right node does not exist
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        //setting current node to the right node
        current = current.right;
        continue;
      }

      //the left side
      while (current.val > val) {
        //if the left node does not exist
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        //setting current node to the left node
        current = current.left;
        continue;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    const newNode = new Node(val);
    
    if (node === null) {
      node = newNode;
      return this;
    }

    if(node.val < val) {
      if(node.right === null) {
        node.right = newNode;
        return this;
      }
      return this.insertRecursively(val, node.right);
    } else {
      if(node.left === null) {
        node.left = newNode;
        return this;
      }
      return this.insertRecursively(val, node.left);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = BinarySearchTree;
