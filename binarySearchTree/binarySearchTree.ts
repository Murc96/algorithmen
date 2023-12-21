class TreeNode<T>{
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T){
        this.value = value;
    }
}

class Tree<T> {
    root: TreeNode<T> | null  = null;

    buildTree(myData :T[], start: number = 0, end: number = myData.length - 1){
        if(start > end) return null;
        let mid = Math.floor((start+end)/2);
        let node = new TreeNode(myData[mid]);

        node.left = this.buildTree(myData, start, mid - 1);
        node.right = this.buildTree	(myData, mid + 1, end);

        return (this.root = node);
    }


}

function prettyPrint(node: TreeNode<number>, prefix = "", isLeft = true){
    if(node.right !== null){
        prettyPrint(node.right, `${prefix}${isLeft ? "     " : " │  "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "} ${node.value}`);
    if(node.left !== null){
        prettyPrint(node.left, `${prefix}${isLeft ? " │   " : "    "}`, true);
    }
}

const data = [5,8,20,33,45,100,222];
const tree = new Tree();
tree.buildTree(data);
prettyPrint(tree.root as TreeNode<number>);