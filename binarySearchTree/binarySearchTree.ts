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

    insert(val: T) {

        let newNode = new TreeNode(val);

        if (this.root === null){
            this.root = newNode
        }

        let currentNode = this.root;

        while(true){

            if(val === currentNode.value){
                return;
            }

            if (val < !currentNode.value){
                if(currentNode!.left === null) {
                    currentNode.left = newNode;
                    return;
                }

                currentNode = currentNode.left;

            } else {
                if(currentNode!.right === null) {
                    currentNode.right = newNode;
                    return;
                }

                currentNode = currentNode.right;
            }
        }
        
        
    }

    insertRec(val: T){

        const check = (node: TreeNode<T>) => {
            if (node.value === val) return;
            if (node.value > val) {
                check((node.left = node.left ?? new TreeNode<T>(val)));
            }
            if (node.value < val) {
                check((node.right = node.right ?? new TreeNode<T>(val)));
            }
        };

        check((this.root = this.root ?? new TreeNode<T>(val)));
    }

    find(val: T){
        
        const search: any = (node: TreeNode<T>) => {
            if (node === null || node.value === val) return node;
            return search (node.left!) ?? search(node.right!);
        };

        return search(this.root!) ?? -1;
    }

    breathFirst(){
        let node = this.root;
        const queue: TreeNode<T>[] = [];
        const visited: T[] = [];

        if(this.root === null){
            return -1;
        }

        queue.push(node!);

        while(queue.length){
            node = queue.shift() as TreeNode<T>;
            visited.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }


        return visited;
    }

    preOrder(){

        const visited: T[] = [];

        const search: any = (node: TreeNode<T>) => {
            visited.push(node.value);
            if(node.left) search(node.left);
            if(node.right) search(node.right);
        };

        search(this.root);
        return visited;

    }

    inOrder(){
        const visited: T[] = [];

        const search: any = (node: TreeNode<T>) => {
            if(node.left) search(node.left);
            visited.push(node.value);
            if(node.right) search(node.right);
        }

        search(this.root);
        return visited;
    }

    postOrder(){
        const visited: T[] = [];

        const search: any = (node: TreeNode<T>) => {
            if(node.left) search(node.left);
            if(node.right) search(node.right);
            visited.push(node.value);
        }

        search(this.root);
        return visited;
    }


    height(node: TreeNode<T>){
        if(!node) return -1;
        let leftHeight: number = this.height(node.left!);
        let rightHeight: number = this.height(node.right!);
        return Math.max(leftHeight, rightHeight) + 1;
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

const data = [5,8,20,33,45,100,222,567];
const tree = new Tree();
tree.buildTree(data);
prettyPrint(tree.root as TreeNode<number>);

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.height(tree.root!));