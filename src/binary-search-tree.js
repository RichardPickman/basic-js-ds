const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this.tree = null;
  }

  root() {
    return this.tree
  }

  add(data) {
    this.tree = addNode(this.tree, data)

    function addNode(node, value) {
      if (!node) {
        return new Node(value)
      }

      if (node.data === value) {
        return node
      }

      if (value < node.data) {
        node.left = addNode(node.left, value)
      } else {
        node.right = addNode(node.right, value)
      }

      return node;
    }
  }

  has(data) {
    return checkNode(this.tree, data);
    
    function checkNode(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data ? 
      checkNode(node.left, value):
      checkNode(node.right, value);
    }
  }

  find(data) {
    return checkNode(this.tree, data);
    
    function checkNode(node, value) {
      if (!node) return null;
      
      if (node.data === value) return node;

      return value < node.data ? checkNode(node.left, value): checkNode(node.right, value);
    }
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

      if (!node.left) return node.right;

      if (!node.right) return node.left;

      let minFromRight = node.right;

      while (minFromRight.left) minFromRight = minFromRight.left;
      
      node.data = minFromRight.data;

      node.right = removeNode(node.right, minFromRight.data);

      return node;
    }
  }

  min() {
    if (!this.tree) {
      return;
    }

    let currentNode = this.tree;

    while (currentNode.left) currentNode = currentNode.left;

    return currentNode.data;
  }

  max() {
    if (!this.tree) return;

    let currentNode = this.tree;

    while (currentNode.right) currentNode = currentNode.right;

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
