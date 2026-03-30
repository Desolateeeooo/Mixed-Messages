/* 
	This is an underlying Tree Data Structure, which I am using in order to store and modify data.
	THIS CLASS SHOULD NOT BE MODIFIED!!
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (typeof child !== 'string') {
      throw new Error('The child to be added should be a string!');
    }

    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length;

    if (childToRemove instanceof TreeNode) {
      this.children = this.children.filter((child) => child !== childToRemove);
    } else {
      this.children = this.children.filter((child) => child.data !== childToRemove.data);
    }

    if (length === this.children.length) {
      this.children.forEach((child) => child.removeChild(childToRemove));
    }
  }

  // This is a helper method for printing which is roughly the same as DFT
  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '-- ';
    }

    console.log(`${result}${this.data}`);
    this.children.forEach((child) => child.print(level + 1));
  }

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach((child) => child.depthFirstTraversal());
  }

  breadthFirstTraversal() {
    const queue = [this];

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);

      queue = queue.concat(current.children);
    }

		return queue;
  }
}

export default TreeNode;
