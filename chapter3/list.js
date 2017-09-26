function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataSource = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
    this.insertBig = insertBig;
    this.insertSmall = insertSmall;
}

function append(element) {
    this.dataSource[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataSource.length; ++i) {
        if(this.dataSource[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if(foundAt > -1) {
        this.dataSource.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataSource;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataSource.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataSource;
    this.dataSource = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for(var i = 0; i < this.dataSource.length; ++i) {
        if(this.dataSource[i] == element)
        return true;
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if(this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataSource[this.pos];
}

function insertBig(element) {
    if(this.dataSource.every(item => item < element)) {
        this.insert(element, this.dataSource[this.length() -1]);
    }
    else {
        console.log('do nothing');
    }
}

function insertSmall(element) {
    if(this.dataSource.every(item => item > element)) {
        this.insert(element, this.dataSource[this.length() - 1])
    }
    else {
        console.info('do nothing');
    }
}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.info(names.getElement());
names.next();
console.info(names.getElement());
names.next();
names.next();
console.info(names.getElement());
names.prev();
console.info(names.getElement());

// for(names.front(); names.currPos() < names.length(); names.next()) {
//     console.log(names.currPos(), names.length());
//     console.log(names.getElement());
// }


names.insertBig('William');
names.insertBig('Alan');
names.insertBig('Hello');
names.insertSmall('Jeek');
names.insertSmall('Alen');
console.log(names.toString());




