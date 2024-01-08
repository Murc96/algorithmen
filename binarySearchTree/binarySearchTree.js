"use strict";
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    buildTree(myData, start = 0, end = myData.length - 1) {
        if (start > end)
            return null;
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode(myData[mid]);
        node.left = this.buildTree(myData, start, mid - 1);
        node.right = this.buildTree(myData, mid + 1, end);
        return (this.root = node);
    }
    insert(val) {
        let newNode = new TreeNode(val);
        if (this.root === null) {
            this.root = newNode;
        }
        let currentNode = this.root;
        while (true) {
            if (val === currentNode.value) {
                return;
            }
            if (val < !currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            }
            else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
    insertRec(val) {
        var _a;
        const check = (node) => {
            var _a, _b;
            if (node.value === val)
                return;
            if (node.value > val) {
                check((node.left = (_a = node.left) !== null && _a !== void 0 ? _a : new TreeNode(val)));
            }
            if (node.value < val) {
                check((node.right = (_b = node.right) !== null && _b !== void 0 ? _b : new TreeNode(val)));
            }
        };
        check((this.root = (_a = this.root) !== null && _a !== void 0 ? _a : new TreeNode(val)));
    }
    find(val) {
        var _a;
        const search = (node) => {
            var _a;
            if (node === null || node.value === val)
                return node;
            return (_a = search(node.left)) !== null && _a !== void 0 ? _a : search(node.right);
        };
        return (_a = search(this.root)) !== null && _a !== void 0 ? _a : -1;
    }
    breathFirst() {
        let node = this.root;
        const queue = [];
        const visited = [];
        if (this.root === null) {
            return -1;
        }
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        return visited;
    }
    preOrder() {
        const visited = [];
        const search = (node) => {
            visited.push(node.value);
            if (node.left)
                search(node.left);
            if (node.right)
                search(node.right);
        };
        search(this.root);
        return visited;
    }
    inOrder() {
        const visited = [];
        const search = (node) => {
            if (node.left)
                search(node.left);
            visited.push(node.value);
            if (node.right)
                search(node.right);
        };
        search(this.root);
        return visited;
    }
    postOrder() {
        const visited = [];
        const search = (node) => {
            if (node.left)
                search(node.left);
            if (node.right)
                search(node.right);
            visited.push(node.value);
        };
        search(this.root);
        return visited;
    }
    height(node) {
        if (!node)
            return -1;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
function prettyPrint(node, prefix = "", isLeft = true) {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "     " : " │  "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "} ${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? " │   " : "    "}`, true);
    }
}
const data = [5, 8, 20, 33, 45, 100, 222, 567];
const tree = new Tree();
tree.buildTree(data);
prettyPrint(tree.root);
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.height(tree.root));
