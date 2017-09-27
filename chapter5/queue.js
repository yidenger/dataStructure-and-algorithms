function Queue() {
    this.dataSource = [];
    this.enqueue = function(element) {
        this.dataSource.push(element);
    }
    this.dequeue = function() {
        return this.dataSource.shift();
    }
    this.front = function() {
        return this.dataSource[0];
    }
    this.back = function() {
        return this.dataSource[this.dataSource.length -1];
    }
    this.toString = function() { return this.dataSource }
    this.empty = function() {
        if(this.dataSource.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

var queue = new Queue();
queue.enqueue('hello');
queue.enqueue('nihao');
queue.enqueue('hi');
console.log(queue.toString());