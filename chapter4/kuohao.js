function Stack() {
    this.top = 0;
    this.dataSource = [];
    this.push = function(element) {
        this.dataSource[this.top++] = element;
    }
    this.pop = function() {
        if(this.top > 0)
        return this.dataSource[--this.top];
    }
    this.peek = function() {
        return this.dataSource[this.top - 1];
    }
    this.length = function() { return this.top }
}

function check(str) {
    var stack = new Stack();
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            stack.push(str[i]);
        }
        if(str[i] === ')') {
            stack.pop();
        }
    }
    if(!stack.top) {
        return true;
    } 
    else {
        return false;
    }
}

var str1 = '2.3 + 23/12 + (3.14159 * 0.24';
var str2 = '2.2 + (2 * 3)()';

console.log(check(str1));
console.log(check(str2));
console.log(check(')2 * 3'))
