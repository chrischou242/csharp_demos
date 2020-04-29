/* 
  w4d2
    - create the BST class and the BSTNode class
      - a BST has a root instead of a head (because it's a tree)
      - a BSTNode has a left, right, and val or data instead of next
    - BST Max return the max with and without recursion
    - BST Min return the min with and without recursion

  w4d3
    - BST Contains (with & without recursion)
    - min of right sub tree (how can non-recursive min & max be adapted to work for this?)
    - max of left sub tree
*/

/* 
                  50
                /   \
              40    60
            /  \    / \
          30   45 55  70
        /   \        /
      20    35     65
        \
        25
*/

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // bst.min(myBst.root.right) would let us get the min value of the right sub-tree
  min(current = this.root) {
    if (current === null) {
      return null;
    }

    while (current.left) {
      current = current.left;
    }
    return current.val;
  }

  minRecursive(current = this.root) {
    if (current === null) {
      return null;
    }

    if (current.left === null) {
      return current.val;
    }

    return this.minRecursive(current.left);
  }

  // bst.max(myBst.root.left) would let us get the max vlaue of the right sub-tree
  max(current = this.root) {
    if (current === null) {
      return null;
    }

    while (current.right) {
      current = current.right;
    }
    return current.val;
  }

  maxRecursive(current = this.root) {
    if (current === null) {
      return null;
    }

    if (current.right === null) {
      return current.val;
    }

    return this.minRecursive(current.right);
  }

  contains(searchVal) {
    let current = this.root;

    while (current) {
      if (current.val === searchVal) {
        return true;
      }

      if (searchVal < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  containsRecursive(searchVal, current = this.root) {
    if (current === null) {
      return false;
    }

    if (current.val === searchVal) {
      return true;
    }

    if (searchVal < current.val) {
      return this.containsRecursive(searchVal, current.left);
    }

    if (searchVal > current.val) {
      return this.containsRecursive(searchVal, current.right);
    }
  }
}
