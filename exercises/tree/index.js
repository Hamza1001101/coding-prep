// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(value) {
    this.data = value;
    this.children = [];
  }
  add(item) {
    //*create a new node and add it to the current nodes children array
    this.children.push(new Node(item));
  }
  remove(item) {
    this.children = this.children.filter((node) => node.data !== item);
  }
}

class Tree {
  constructor() {
    this.root = null;
    }
    traverseBF(fn) {
        const arr = [this.root]
        while (arr.length) {
            const node = arr.shift()
            arr.push(...node.children)

            fn(node)
        }

    }
    traverseDF(fn) {
         const arr = [this.root];
         while (arr.length) {
             const node = arr.shift();
           arr.unshift(...node.children);

           fn(node);
         }
    }
}

module.exports = { Tree, Node };
 