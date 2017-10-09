function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.count = count;
    this.countLine = countLine;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current == null) {
                    parent.left = n;
                    break;
                } 
            }
            else {
                current = current.right;
                if(current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if(node != null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if(node != null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if(node != null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

function getMin() {
    var current = this.root;
    while(current.left != null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while(current.right != null) {
        current = current.right;
    }
    return current.data;
}

function find(data) {
    var current = this.root;
    while(current != null) {
        if(current.data == data) {
            return current;
        }
        else if(data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }

    return null;
}

//计算节点个数
function count(node) {
    var sum = 0;
    if(node != null) {
        sum++;
        var leftCount = count(node.left);
        var rightCount = count(node.right);
        sum += leftCount + rightCount;
    }

    return sum;
}

//计算边的条数
function countLine(node) {
    var sum = 0;
    if(node != null) {
        var leftCount = 0;
        var rightCount = 0;
        if(node.left != null) {
            sum++;
            leftCount = countLine(node.left);
        }
        if(node.right != null) {
            sum++;
            rightCount = countLine(node.right);
        }

        sum += leftCount + rightCount;
    }
    return sum;
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log('inOrder: ');
nums.inOrder(nums.root);

console.log('preOrder: ');
preOrder(nums.root);

console.log('postOrder: ');
postOrder(nums.root);

console.log('the min: ', nums.getMin());
console.log('the max: ', nums.getMax());

console.log('find 88: ', nums.find(88));
console.log('find 37: ', nums.find(37));
console.log('find 16: ', nums.find(16));
console.log('count node: ', nums.count(nums.root));
console.log('count line: ', nums.countLine(nums.root));