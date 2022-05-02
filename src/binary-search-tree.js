const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree
  }

  add(data) {
    this.tree = addNode(this.tree, data)

    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    let node = this.tree;

    while (node) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return false;
  }

  find(data) {
    let node = this.tree;

    while (node) {
      if (node.data === data) return node;

      if (data < node.data) {
        node = node.left
      } else {
        node = node.right
      }
    }

    return null;
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);

        return node;
      }
      
      if (node.data < data) {
        node.right = removeNode(node.right, data);

        return node;
      }

      if (!node.left && !node.right) return null;
      
      if (!node.left) { node = node.right; return node }
      if (!node.right) { node = node.left; return node }

      let maxFromLeft = node.left;

      while (maxFromLeft.right) maxFromLeft = maxFromLeft.right;

      node.data = maxFromLeft.data;

      node.right = removeNode(node.right, maxFromLeft.data);

      return node;
    }
  }

  min() {
    if (!this.tree) {
      return;
    }

    let node = this.tree;

    while (node.left) node = node.left;

    return node.data;
  }

  max() {
    if (!this.tree) {
      return;
    }

    let node = this.tree;

    while (node.right) node = node.right;

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
