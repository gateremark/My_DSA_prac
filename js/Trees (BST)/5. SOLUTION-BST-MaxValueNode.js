class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } 
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }      
    
    maxValueNode(currentNode) {
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }

}



function test() {
    let myTree = new BST();

    myTree.insert(47);
    myTree.insert(21);
    myTree.insert(76);
    myTree.insert(18);
    myTree.insert(27);
    myTree.insert(52);
    myTree.insert(82);

    console.log("maxValueNode from root:", myTree.maxValueNode(myTree.root).value);
    console.log("\nmaxValueNode from root.right:", myTree.maxValueNode(myTree.root.left).value);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    maxValueNode from root: 82

    minValueNode from root.left: 27

*/