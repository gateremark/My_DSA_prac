// WRITE NODE CLASS HERE //
class Node {
    cosntructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
///////////////////////////
 
class BST {
	// WRITE BST CONSTRUCTOR HERE //
    constructor(value){
        this.root = null
    }
	////////////////////////////////
}

 
 
function test() {
    let myBST = new BST();   
    
    if (myBST.root === null) {
        console.log("Root: null");
    } else {
        console.log("Root:", myBST.root.value);
    }
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Root: null

*/