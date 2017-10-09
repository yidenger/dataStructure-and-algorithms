var fs = require('fs');
var path = require('path');
var fileContext = fs.readFileSync(path.join(__dirname, 'a.txt')).toString();

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.count = 1;
    this.show = function() { return this.data }
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.find = find;
    this.update = update;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
}

function update(data) {
    var word = this.find(data);
    word.count++;
    return word;
}

function find(data) {
    var current = this.root;
    while(current !== null) {
        if(current.data = data) {
            return current;
        }
        else if(data < current.data) {
            current = current.left;
        }
        else if(data > current.data) {
            current = current.right;
        }
    }

    return null;
}

function insert(data) {
    var node = new Node(data);
    if(this.root == null) {
        this.root = node;
    }
    else {
        var current = this.root;
        while(true) {
            if(data == current.data) {
                current.count++;
                break;
            }
            else if(data < current.data) {
                if(current.left == null) {
                    current.left = node;
                    break;
                }
                current = current.left;
            }
            else if(data > current.data) {
                if(current.right == null) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }
}

function inOrder(node) {
    if(node != null) {
        inOrder(node.left);
        console.log(`${node.data}, ${node.count}`);
        inOrder(node.right);
    }
}

function preOrder(node) {
    if(node != null) {
        console.log(`${node.data}, ${node.count}`);
        preOrder(node.left);
        preOrder(node.right);
    }
}

var bst = new BST();
console.log(fileContext);
fileContext.split(/\W\s*/).filter(item => item != "").map(item => bst.insert(item));
// bst.inOrder(bst.root);
bst.preOrder(bst.root);

